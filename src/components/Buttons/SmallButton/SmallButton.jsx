import React from "react";

function SmallButton({ icon = null, value, className, ...props }) {
   return (
      <button
         className={`small-button ${className}`}
         value={value}
         {...props}
      />
   );
}

export default SmallButton;
