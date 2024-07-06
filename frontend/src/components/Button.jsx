import React from "react";

const Button = ({ text, type }) => {
  return <button className={`btn ${type}`}>{text}</button>;
};

export default Button;
