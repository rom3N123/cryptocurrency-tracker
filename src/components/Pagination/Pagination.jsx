import React from "react";

import { Pagination as MuiPagination } from "@material-ui/core";
import { useSelector } from "react-redux";

function Pagination() {
   const state = useSelector((state) => state);

   const [pages, setPages] = React.useState(null);

   React.useEffect(() => {
      const calculateTotalPages = () => {
         let total = Math.round(
            state.coins.total / state.searchParams.per_page
         );

         setPages(total);
      };

      calculateTotalPages();
   }, [state.coins.total]);

   return <MuiPagination count={pages}></MuiPagination>;
}

export default Pagination;
