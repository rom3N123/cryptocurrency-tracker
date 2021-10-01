import React from "react";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core";

import "./Navigation.scss";

function Navigation() {
   const navigationItems = [
      {
         to: "/",
         label: "Home",
      },
      {
         to: "/trending",
         label: "Trending",
      },
   ];

   return (
      <ul className="navigation">
         {navigationItems.map((item) => (
            <Link
               className="with-border"
               key={item.to}
               to={item.to}
               component={MuiLink}
            >
               {item.label}
            </Link>
         ))}
      </ul>
   );
}

export default Navigation;
