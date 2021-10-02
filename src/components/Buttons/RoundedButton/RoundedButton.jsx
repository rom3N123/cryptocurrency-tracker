import React from "react";
import styled from "@material-ui/styled-engine";
import { Button } from "@material-ui/core";

const RoundedBtn = styled(Button)(({ theme }) => ({
   borderRadius: "8px",
   textTransform: "none",
   backgroundColor: theme.palette.primary.light,
   color: "#fff",
   padding: "4px 8px",

   "&:hover": {
      backgroundColor: theme.palette.primary.main,
   },
}));

function RoundedButton({ ...props }) {
   return <RoundedBtn {...props} />;
}

export default RoundedButton;
