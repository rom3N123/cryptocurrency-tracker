import React from "react";

import { Pagination as MuiPagination } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useQuery } from "hooks";

function Pagination() {
   const query = useQuery();

   const state = useSelector((state) => state);

   const history = useHistory();

   const [pages, setPages] = React.useState(null);

   const handleChange = (e, value) => history.push("/?page=" + value);

   React.useEffect(() => {
      const calculateTotalPages = () => {
         let total = Math.round(
            state.coins.total / state.searchParams.coinsSearch.per_page
         );

         setPages(total);
      };

      calculateTotalPages();
   }, [state.coins.total]);

   return (
      <MuiPagination
         defaultPage={query.get("page") ? Number(query.get("page")) : 1}
         onChange={handleChange}
         count={pages}
      />
   );
}

export default Pagination;
