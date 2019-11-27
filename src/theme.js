import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffa300",
      light: "#ffd449",
      dark: "#ff6d00",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ff8500",
      light: "#ffb644",
      dark: "#c55600",
      contrastText: "#000000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
