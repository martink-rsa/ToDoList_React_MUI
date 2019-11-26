/* eslint-disable react/prefer-stateless-function */
import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDo from "../ToDo/ToDo";
import ToDoEmpty from "../ToDoEmpty/ToDoEmpty";

export default function ToDosList(props) {
  const {
    todos,
    projects,
    projectIcons,
    setTodoCompleted,
    deleteTodo,
    updateTodo,
  } = props;
  const noTodos = Object.keys(todos).length === 0;
  if (noTodos) {
    return (
      <Paper>
        <List>
          <ToDoEmpty message="All Todos Completed!" />
        </List>
      </Paper>
    );
  }
  return (
    <Paper>
      <List>
        {Object.keys(todos).map((key) => (
          <ToDo
            key={key}
            index={key}
            todo={todos[key]}
            projects={projects}
            projectIcons={projectIcons}
            setTodoCompleted={setTodoCompleted}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

ToDosList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.object).isRequired,
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTodoCompleted: PropTypes.func.isRequired,
};
