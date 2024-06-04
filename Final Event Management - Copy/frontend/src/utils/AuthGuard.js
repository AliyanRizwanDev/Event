import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

const AuthGuard = (props) => {
  const {Component, ...rest } = props;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const nav = useNavigate();

  if (!isAuthenticated) {
    nav("/");
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default AuthGuard;
