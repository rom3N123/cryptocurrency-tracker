import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo } = useApi();

   const { id } = useParams();

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id, fetchCoinInfo]);

   return (
      <section className="coin-detail-page">
         <div className="container">
            <div className="coin-detail-page__inner"></div>
         </div>
      </section>
   );
}

export default CointDetailPage;
