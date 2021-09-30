import React from "react";
import "./Input.scss";

function Input({ value, ...props }) {
   return <input value={value} {...props} />;
}

export default Input;
