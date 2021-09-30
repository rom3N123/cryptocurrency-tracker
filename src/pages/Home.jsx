import React from "react";
import { CoinsCatalog, Header, Button } from "components";

import { ReactComponent as FilterSVG } from "../assets/images/filter.svg";

function Home() {
   return (
      <section>
         <Header />

         <CoinsCatalog />

         <Button IconComponent={FilterSVG} label="Filters" />
      </section>
   );
}

export default Home;
