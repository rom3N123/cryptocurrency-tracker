import React from "react";

import { Pagination as MuiPagination } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function Pagination() {
   const state = useSelector((state) => state);

   const history = useHistory();

   const [pages, setPages] = React.useState(null);

   const handleChange = (e, value) => history.push("/?page=" + value);

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
