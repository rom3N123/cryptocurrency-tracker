import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";
import { CoinDetailPageHeader } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo } = useApi();

   const { id } = useParams();

   const coin = useSelector((state) => state.coinDetailPage);

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id]);

   if (!coin.info) {
      return null;
   }

   return (
      <section className="coin-detail-page">
         <CoinDetailPageHeader />
      </section>
   );
}

export default CointDetailPage;
