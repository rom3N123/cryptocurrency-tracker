import React from "react";
import { CoinsCatalog, Header } from "components";
import Button from "components/Buttons/Button/Button";

function Home() {
   return (
      <section>
         <Header />

         <CoinsCatalog />

         <Button label="Filters" />
      </section>
   );
}

export default Home;
