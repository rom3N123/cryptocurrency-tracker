import React from "react";

import "../CoinDetailPageHeader/CoinDetailPageHeader.scss";
import "../CoinDetailName/CoinDetailName.scss";
import { Grid, Skeleton } from "@material-ui/core";

function SkeletonCoinDetailPage() {
   return (
      <section>
         <header className={`coin-detail-page-header`}>
            <div className="container">
               <div className="coin-detail-page-header__coin-info">
                  <div className="coin-detail-page-header__data-overview">
                     <div className={`coin-market-info`}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" width={200} height={30} />
                        <Skeleton variant="text" width={40} height={30} />
                     </div>
                     <div>
                        <Skeleton width="100%" height={40} />
                     </div>
                     <Skeleton
                        sx={{ marginTop: "20px" }}
                        width="100%"
                        height={40}
                     />
                  </div>

                  <div className="coin-detail-page-header__market-overview">
                     <Skeleton variant="text" height={40} width={200} />
                     <Skeleton variant="rectangular" width="100%" height={80} />
                  </div>
               </div>
            </div>
         </header>

         <div>
            <Grid sx={{ marginTop: "30px" }} className="container">
               <Skeleton variant="text" width={150} height={40} />

               <Grid
                  sx={{ margin: "20px 0" }}
                  container
                  justifyContent="space-between"
                  alignItems="center"
               >
                  <Skeleton variant="rectangular" width={250} height={40} />

                  <Skeleton variant="rectangular" width={250} height={40} />
               </Grid>

               <Skeleton
                  sx={{ marginTop: "30px" }}
                  variant="rectangular"
                  width="100%"
                  height={400}
               />
            </Grid>
         </div>
      </section>
   );
}

export default SkeletonCoinDetailPage;
