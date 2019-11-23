import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffa300",
      light: "#ffd449",
      dark: "#c67400",
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

const theme2 = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffa300",
      light: "#ffd449",
      dark: "#c67400",
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

export { theme2 };
export default theme;
