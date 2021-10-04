import React from "react";
import { CoinsCatalog } from "components";
import { useApi } from "hooks";
import { useDispatch } from "react-redux";

function Home() {
   const { updateCoinsList } = useApi();

   const dispatch = useDispatch();

   // React.useEffect(() => {
   //    setTimeout(() => {
   //       alert("fetch");
   //       dispatch(updateCoinsList());
   //    }, 2000);
   // }, []);

   return (
      <section>
         <CoinsCatalog />
      </section>
   );
}

export default Home;
