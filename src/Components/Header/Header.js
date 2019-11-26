import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Header = ({ headerTitle }) => (
  <div>
    <Typography variant="h4" component="h1" align="center" gutterBottom>
      {headerTitle}
    </Typography>
    <p align="center">Keep track of your tasks</p>
  </div>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default Header;
