import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";

function CointDetailPage() {
   const { fetchCoinInfo } = useApi();

   const { id } = useParams();

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id, fetchCoinInfo]);

   return <div>Coin page</div>;
}

export default CointDetailPage;
