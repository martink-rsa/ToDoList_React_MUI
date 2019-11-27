/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import PropTypes from "prop-types";
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

export default function ToDo(props) {
  const {
    todo,
    todo: { title, desc, dateEnd, completed, projectKey },
    projects,
    index,
    projectIcons,
    updateTodo,
    deleteTodo,
    setTodoCompleted,
  } = props;

  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar>
          {projects[projectKey] !== undefined &&
          projects[projectKey] !== null ? (
            <Icon>{projectIcons[projects[projectKey].icon]}</Icon>
          ) : (
            <Icon>{projectIcons[0]}</Icon>
          )}
        </Avatar>
      </ListItemAvatar>
      {completed ? (
        <ListItemText
          className="Todo-completed"
          primary={
            <span>
              {title}
              <Typography variant="caption" color="textSecondary" noWrap>
                {` (${dateEnd})`}
              </Typography>
            </span>
          }
          secondary={desc}
        />
      ) : (
        <ListItemText
          primary={
            <span>
              {title}
              <Typography variant="caption" color="textSecondary" noWrap>
                {` (${dateEnd})`}
              </Typography>
            </span>
          }
          secondary={desc}
        />
      )}
      <ListItemSecondaryAction>
        <ToDoDialog
          index={index}
          todo={todo}
          projects={projects}
          projectIcons={projectIcons}
          updateTodo={updateTodo}
        />
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTodo(index)}
        >
          <DeleteIcon />
        </IconButton>
        <Checkbox
          edge="end"
          checked={completed}
          onChange={() => setTodoCompleted(index)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    dateEnd: PropTypes.string,
    completed: PropTypes.bool,
    projectKey: PropTypes.string,
  }).isRequired,
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
};
