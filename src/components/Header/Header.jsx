import React from "react";

import { Searchbar } from "components";

import "./Header.scss";

function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <h1 className="header__title">Search Crypto</h1>
               <Searchbar />
            </div>
         </div>
      </header>
   );
}

export default Header;
