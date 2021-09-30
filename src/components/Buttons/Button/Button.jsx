import React from "react";
import classNames from "classnames";

import "./Button.scss";

function Button({ className = "", icon = null, label }) {
   return (
      <button
         className={classNames(`button ${className}`, {
            "with-content": icon,
         })}
      >
         {icon ? (
            <div className="button__content">
               <span>{icon}</span>
               <span>{label}</span>
            </div>
         ) : (
            label
         )}
      </button>
   );
}

export default Button;
