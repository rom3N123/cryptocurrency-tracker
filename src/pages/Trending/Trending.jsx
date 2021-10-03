import React from "react";
import {
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from "@material-ui/core";
import { useApi, useCoinItem } from "hooks";

import "./Trending.scss";

function Trending() {
   const { fetchTrending } = useApi();
   const { handleCoinItemClick } = useCoinItem();

   const [trending, setTrending] = React.useState(null);

   console.log(trending);

   React.useEffect(() => {
      const getTrendingItems = async () => {
         const data = await fetchTrending();

         setTrending(data);
      };

      getTrendingItems();
   }, []);

   return (
      <section className="trending">
         <div className="container">
            <h3 className="trending__title">Trending</h3>
            {trending && (
               <List sx={{ maxWidth: "50%", margin: "0 auto" }}>
                  {trending.map((el) => (
                     <ListItem disablePadding>
                        <ListItemButton
                           onClick={() => handleCoinItemClick(el.item.id)}
                        >
                           <ListItemIcon>
                              <img src={el.item.thumb} alt="Crypto logo" />
                           </ListItemIcon>

                           <ListItemText sx={{ fontSize: "18px" }}>
                              {el.item.name} #{el.item.market_cap_rank}
                           </ListItemText>
                        </ListItemButton>
                     </ListItem>
                  ))}
               </List>
            )}
         </div>
      </section>
   );
}

export default Trending;
