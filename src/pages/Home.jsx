import React from "react";
import { CoinsCatalog, Header } from "components";

function Home() {
   return (
      <section>
         <Header />

         <CoinsCatalog />

         <button className="button">Filters</button>
      </section>
   );
}

export default Home;
