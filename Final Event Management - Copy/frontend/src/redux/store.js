import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: localStorage.getItem("user") || false,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    LoggedIn(state, action) {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },  

    LoggedOut(state, action) {
      state.userData = {};
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: userSlice.reducer,
});

export const userActions = userSlice.actions;
export default store;
