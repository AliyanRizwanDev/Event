import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utils/ScrollToTop";
import HomeOrg from "./pages/HomeOrg";
import HomeAdmin from "./pages/HomeAdmin";
import HomeAttendee from "./pages/HomeAttendee";
import MyEvents from "./pages/Attendee/MyEvents";
import ExploreEvents from "./pages/Attendee/ExploreEvents";
import MyProfile from "./pages/Attendee/MyProfile";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./redux/store";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedAuthState = JSON.parse(localStorage.getItem("user"));
    if (storedAuthState) {
      dispatch(userActions.LoggedIn(storedAuthState));
    } else {
      dispatch(userActions.LoggedOut());
    }
  }, [dispatch]);

  function AttendeeRoutes() {
    return (
      <Routes>
        <Route path="/" element={<HomeAttendee />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/explore-events" element={<ExploreEvents />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/attendee/*" element={<AttendeeRoutes />} />
            <Route path="/organizer" element={<HomeOrg />} />
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/" element={<Navigate to="/attendee" replace />} />
            <Route
              path="/sign-up"
              element={<Navigate to="/attendee" replace />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </>
        )}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
