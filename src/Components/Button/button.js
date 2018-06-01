import React from "react";

const Button = props => {
  return <button onClick={props.onClick}>{props.buttonLabel}</button>;
}
export default Button;
