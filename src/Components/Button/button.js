import React, { Component } from "react";

const Button = props => {
  return <button onClick={props.onClick}>{props.buttonLabel}</button>;
}
export default Button;
