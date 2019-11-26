import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const primary = "400";
const accent = "A400";

const styles = () => ({
  btnBase: {
    height: "50px",
    width: "50px",
    margin: "5px",
  },
  red: {
    background: red[primary],
    "&:hover": {
      background: red[accent],
    },
  },
  pink: {
    background: pink[primary],
    "&:hover": {
      background: pink[accent],
    },
  },
  purple: {
    background: purple[primary],
    "&:hover": {
      background: purple[accent],
    },
  },
  deepPurple: {
    background: deepPurple[primary],
    "&:hover": {
      background: deepPurple[accent],
    },
  },
  indigo: {
    background: indigo[primary],
    "&:hover": {
      background: indigo[accent],
    },
  },
  blue: {
    background: blue[primary],
    "&:hover": {
      background: blue[accent],
    },
  },
  lightBlue: {
    background: lightBlue[primary],
    "&:hover": {
      background: lightBlue[accent],
    },
  },
  cyan: {
    background: cyan[primary],
    "&:hover": {
      background: cyan[accent],
    },
  },
  teal: {
    background: teal[primary],
    "&:hover": {
      background: teal[accent],
    },
  },
  green: {
    background: green[primary],
    "&:hover": {
      background: green[accent],
    },
  },
  lightGreen: {
    background: lightGreen[primary],
    "&:hover": {
      background: lightGreen[accent],
    },
  },
  lime: {
    background: lime[primary],
    "&:hover": {
      background: lime[accent],
    },
  },
  yellow: {
    background: yellow[primary],
    "&:hover": {
      background: yellow[accent],
    },
  },
  amber: {
    background: amber[primary],
    "&:hover": {
      background: amber[accent],
    },
  },
  orange: {
    background: orange[primary],
    "&:hover": {
      background: orange[accent],
    },
  },
  deepOrange: {
    background: deepOrange[primary],
    "&:hover": {
      background: deepOrange[accent],
    },
  },
  brown: {
    background: brown[primary],
    "&:hover": {
      background: brown[accent],
    },
  },
  grey: {
    background: grey[primary],
    "&:hover": {
      background: grey[accent],
    },
  },
  blueGrey: {
    background: blueGrey[primary],
    "&:hover": {
      background: blueGrey[accent],
    },
  },
});

const colorList = {
  pink,
  red,
  blue,
  indigo,
  purple,
  deepPurple,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
};

class ThemeColorOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setNewColor = (newColor) => {
    const { changeThemeColor } = this.props;
    changeThemeColor(newColor);
  };

  render() {
    const { classes, currentColor } = this.props;
    return (
      <>
        {Object.keys(colorList).map((key) => (
          <Button
            key={key}
            variant="contained"
            className={[classes.btnBase, classes[key]].join(" ")}
            onClick={() => this.setNewColor(key)}
          >
            {currentColor === key ? (
              <CheckCircleIcon color="secondary" />
            ) : null}
            {null}
          </Button>
        ))}
      </>
    );
  }
}

ThemeColorOptions.propTypes = {
  changeThemeColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeColorOptions);
