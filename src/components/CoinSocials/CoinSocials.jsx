import React from "react";

import { HoverMenu, RoundedButton } from "components";
import { useSelector } from "react-redux";

import OpenInNew from "@material-ui/icons/OpenInNew";
import Home from "@material-ui/icons/Home";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Person from "@material-ui/icons/Person";
import Code from "@material-ui/icons/Code";

import { getDomain } from "helpers";
import { MenuItem, Typography } from "@material-ui/core";
import styled from "@material-ui/styled-engine";

import "./CoinSocials.scss";

const OpenInNewIcon = styled(OpenInNew)(() => ({
   color: "rgba(255,255,255, .8)",
   fontSize: "18px !important",
}));

function CoinSocials() {
   const coin = useSelector((state) => state.coinDetailPage.info);

   const [communityLinks, setCommunityLinks] = React.useState(null);

   React.useEffect(() => {
      const getCommunityLinks = () => {
         const linkPath = coin.links;

         let totalLinks = [];

         const apiCommunityFields = {
            reddit: { path: "subreddit_url" },
            chat: { path: "chat_url" },
            forum: { path: "official_forum_url" },
            facebook: {
               path: "facebook_username",
               url: "https://twitter.com/",
            },
            twitter: {
               path: "twitter_screen_name",
               url: "https://www.facebook.com/",
            },
         };

         for (let key in apiCommunityFields) {
            let keyValue = apiCommunityFields[key];

            let link = linkPath[keyValue.path];

            if (link) {
               if (Array.isArray(link)) {
                  totalLinks = [...totalLinks, ...link.filter((el) => el)];
               } else {
                  totalLinks.push(keyValue.url ? keyValue.url + link : link);
               }
            }
         }

         setCommunityLinks(
            totalLinks.map((link) => (
               <MenuItem
                  sx={{ gap: "8px" }}
                  component="a"
                  target="_blank"
                  href={link}
               >
                  <Typography sx={{ fontWeight: "500" }}>
                     {getDomain(link)}
                  </Typography>
                  <OpenInNew
                     sx={{ fontSize: "15px", color: "rgba(0,0,0, .7)" }}
                  />
               </MenuItem>
            ))
         );
      };

      if (coin) {
         getCommunityLinks();
      }
   }, [coin]);

   return (
      <div className="coin-socials">
         <RoundedButton
            component="a"
            target="blank"
            href={coin.links.homepage[0]}
            endIcon={<OpenInNewIcon />}
            startIcon={<Home />}
         >
            {getDomain(coin.links.homepage[0])}
         </RoundedButton>

         {communityLinks && communityLinks.length > 0 && (
            <HoverMenu
               Element={RoundedButton}
               elementProps={{
                  endIcon: <KeyboardArrowDown />,
                  startIcon: <Person />,
                  children: "Community",
               }}
               menuItems={communityLinks}
            />
         )}

         <RoundedButton
            component="a"
            target="blank"
            href={coin.links.repos_url.github[0]}
            endIcon={<OpenInNewIcon />}
            startIcon={<Code />}
         >
            Source code
         </RoundedButton>
      </div>
   );
}

export default CoinSocials;
