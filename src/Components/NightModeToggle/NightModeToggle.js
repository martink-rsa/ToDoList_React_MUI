import React from "react";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { Box, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  grid: {
    paddingLeft: "25px",
    paddingRight: "25px",
  },
}));

export default function NightModeToggle(props) {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
    props.changeThemeMode();
  };

  const classes = useStyles();

  return (
    // <Box border={1} borderColor="secondary.main" borderRadius="10%">
    <Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="flex-end"
        className={classes.grid}
      >
        <Brightness5Icon />
        <Switch
          checked={state.checkedA}
          onChange={handleChange("checkedA")}
          value="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Brightness4Icon />
      </Grid>
    </Box>
  );
}
