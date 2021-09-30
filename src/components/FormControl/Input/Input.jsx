import React from "react";

import "./Input.scss";

function Input({ value, ...props }) {
   return <input className="input" value={value} {...props} />;
}

export default Input;
