import React from "react";

import "./StatsBlock.scss";

function StatsBlock({ statName, statDescription = null, children }) {
   return (
      <div className="stats-block">
         <div className="stats-block__name">
            {statName}

            {statDescription && (
               <div className="stats-block__description">{statDescription}</div>
            )}
         </div>

         <div className="stats-block__value">{children}</div>
      </div>
   );
}

export default StatsBlock;
