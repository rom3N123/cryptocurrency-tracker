import React from "react";

import { Pagination as MuiPagination } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useQuery } from "hooks";
import { DELETE_SORTED_COINS } from "redux/slices/coins";

function Pagination() {
   const query = useQuery();

   const state = useSelector((state) => state);

   const history = useHistory();

   const [pages, setPages] = React.useState(null);

   const dispatch = useDispatch();

   const handleChange = (e, value) => {
      dispatch(DELETE_SORTED_COINS());
      history.push("/?page=" + value);
   };

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
