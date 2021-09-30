import React from "react";

import "./IconButton.scss";

function IconButton({ children, ...props }) {
   return (
      <button className="icon-button" {...props}>
         {children}
      </button>
   );
}

export default IconButton;
