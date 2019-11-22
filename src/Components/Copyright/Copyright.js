import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = ({ urlLink, urlText }) => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright ©{" "}
    <Link color="inherit" href={urlLink} target="_blank">
      {urlText}
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

Copyright.propTypes = {
  urlLink: PropTypes.string.isRequired,
  urlText: PropTypes.string.isRequired,
};

export default Copyright;
