import React, { Component } from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router";

const RequireAuth = () => {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

    if (isAuthenticated) {
      <Component {...props} />;
    } else {
      return redirect("/users");
    }
  };

  return AuthenticatedComponent;
};

export default RequireAuth;
