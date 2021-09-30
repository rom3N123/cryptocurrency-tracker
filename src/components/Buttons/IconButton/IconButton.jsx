import React from "react";

import "./IconButton.scss";

function IconButton({ children, onClick, className, ...props }) {
   return (
      <button
         onClick={onClick}
         className={`icon-button ${className ?? ""}`}
         {...props}
      >
         {children}
      </button>
   );
}

export default IconButton;
