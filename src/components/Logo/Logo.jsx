import React from "react";
import { Link } from "react-router-dom";

import etheriumLogo from "../../assets/images/etherium.svg";

import "./Logo.scss";

function Logo() {
   return (
      <Link to="/">
         <img
            className="logo"
            src={etheriumLogo}
            alt="See triangle form logotype"
         />
      </Link>
   );
}

export default Logo;
