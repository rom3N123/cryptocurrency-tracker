import React from "react";
import { useApi } from "hooks";
import { DataGrid } from "@mui/x-data-grid";

import "./CoinsList.scss";

function CoinsList() {
   const { fetchCoins } = useApi();

   const rows = [];

   const columns = [
      {
         field: "id",
         headerName: "ID",
      },
   ];

   return (
      <div className="container">
         <DataGrid rows={rows} columns={columns} />
      </div>
   );
}

export default CoinsList;
