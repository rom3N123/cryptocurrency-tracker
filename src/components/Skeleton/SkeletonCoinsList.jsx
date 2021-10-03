import React from "react";
import { Grid, Skeleton } from "@material-ui/core";
import { useSelector } from "react-redux";

import "../CoinsList/CoinsList.scss";

function SkeletonCoinsList() {
   const searchParams = useSelector((state) => state.searchParams);

   console.log(searchParams.per_page);

   return (
      <>
         {Array(searchParams.per_page)
            .fill(null)
            .map(() => (
               <tr className="coins-table__coin-item">
                  <td className="market-place">
                     <Skeleton
                        component="p"
                        sx={{ margin: "0 auto" }}
                        variant="text"
                        width={20}
                        height={30}
                     />
                  </td>

                  <td>
                     <Grid container alignItems="center" gap={3}>
                        <Skeleton variant="circular" width={30} height={30} />

                        <Skeleton variant="text" width={45} />

                        <Skeleton variant="text" width={25} />
                     </Grid>
                  </td>

                  <td className="coins-table__coin-item-price">
                     <Skeleton
                        component="p"
                        sx={{ margin: "0 auto" }}
                        variant="text"
                        width={40}
                        height={30}
                     />
                  </td>

                  <td className="coins-table__coin-item-percentage">
                     <Skeleton
                        component="p"
                        sx={{ margin: "0 auto" }}
                        variant="text"
                        width={40}
                        height={30}
                     />
                  </td>
               </tr>
            ))}
      </>
   );
}

export default SkeletonCoinsList;
