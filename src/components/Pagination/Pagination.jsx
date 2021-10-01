import React from "react";

import { Pagination as MuiPagination } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useSearchParams } from "hooks";

function Pagination() {
   const state = useSelector((state) => state);
   const { setPage } = useSearchParams();

   const [pages, setPages] = React.useState(null);

   const handleChange = (e, value) => setPage(value);

   React.useEffect(() => {
      const calculateTotalPages = () => {
         let total = Math.round(
            state.coins.total / state.searchParams.per_page
         );

         setPages(total);
      };

      calculateTotalPages();
   }, [state.coins.total]);

   return <MuiPagination onChange={handleChange} count={pages}></MuiPagination>;
}

export default Pagination;
