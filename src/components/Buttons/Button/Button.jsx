import React from "react";
import classNames from "classnames";

import "./Button.scss";

function Button({ className = "", IconComponent = null, label }) {
   return (
      <button
         className={classNames(`button ${className}`, {
            "with-content": IconComponent,
         })}
      >
         {IconComponent ? (
            <div className="button__content">
               <IconComponent />
               <span>{label}</span>
            </div>
         ) : (
            label
         )}
      </button>
   );
}

export default Button;
