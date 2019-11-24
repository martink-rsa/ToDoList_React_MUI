/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
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

export default ToDoEmpty;
