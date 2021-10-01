import classNames from "classnames";
import React from "react";

function Input({ value, fullWidth = false, ...props }) {
   return (
      <input
         className={classNames("input", {
            "input_full-width": fullWidth,
         })}
         value={value}
         {...props}
      />
   );
}

export default Input;
