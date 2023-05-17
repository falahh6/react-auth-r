import { CSSTransition } from "react-transition-group";
import "./PageAnimations.css";
import React from "react";
const PageAnimations = ({ children }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="slide" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export default PageAnimations;
