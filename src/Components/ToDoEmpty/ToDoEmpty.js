import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";

const ToDoEmpty = ({ message }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <Icon>done_all</Icon>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={message} />
  </ListItem>
);

ToDoEmpty.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ToDoEmpty;
