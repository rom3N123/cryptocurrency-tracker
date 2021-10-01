import { createTheme } from "@material-ui/core";

const MuiTheme = createTheme({
   components: {
      MuiIconButton: {
         defaultProps: {
            size: "small",
         },
      },

      MuiLink: {
         styleOverrides: {
            root: {
               color: "#fff",
            },
         },
         defaultProps: {
            underline: "hover",
         },
      },

      MuiSvgIcon: {
         styleOverrides: {
            root: {
               fontSize: "1.8rem",
            },
         },
      },
   },
});

export default MuiTheme;
