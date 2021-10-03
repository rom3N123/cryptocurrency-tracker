import React from "react";

import { Logo } from "components";

import "./Header.scss";

function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <Logo />
            </div>
         </div>
      </header>
   );
}

export default Header;
