import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: {
    main: "#0271C5"
  },

  secondary: {
    main: "#fff"
  },

  mainNavText: "#333333"
};

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },

  palette: colors
});
