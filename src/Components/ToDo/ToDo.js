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
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import ToDoDialog from "../ToDoDialog/ToDoDialog";

class ToDo extends React.Component {
  handleChange = (event) => {
    // 1. Get copy of the current todo
    const updatedTodo = {
      ...this.props.todo,
    };
  };

  render() {
    const { title, desc, dateEnd, completed, projectKey } = this.props.todo;

    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>
            <Icon>
              {this.props.projectIcons[this.props.projects[projectKey].icon]}
            </Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <span>
              {title}
              <Typography variant="caption" color="textSecondary">
                {/* {` (${format(new Date(dateEnd), "dd/MM/yyyy")})`} */}
                {` (${dateEnd})`}
              </Typography>
            </span>
          }
          secondary={desc}
        />
        <ListItemSecondaryAction>
          <ToDoDialog
            index={this.props.index}
            todo={this.props.todo}
            projects={this.props.projects}
            projectIcons={this.props.projectIcons}
            updateTodo={this.props.updateTodo}
          />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => this.props.deleteTodo(this.props.index)}
          >
            <DeleteIcon />
          </IconButton>
          <Checkbox
            edge="end"
            checked={completed}
            onChange={() => this.props.setTodoCompleted(this.props.index)}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default ToDo;
