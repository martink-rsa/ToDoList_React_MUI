/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDo from "../ToDo/ToDo";
import ToDoEmpty from "../ToDoEmpty/ToDoEmpty";

class ToDosList extends React.Component {
  render() {
    const noTodos = Object.keys(this.props.todos).length === 0;
    if (noTodos) {
      return (
        <Paper>
          <List>
            <ToDoEmpty message={"All Todos Completed!"} />
          </List>
        </Paper>
      );
    }
    return (
      <Paper>
        <List>
          {Object.keys(this.props.todos).map((key) => (
            <ToDo
              key={key}
              index={key}
              todo={this.props.todos[key]}
              projects={this.props.projects}
              projectIcons={this.props.projectIcons}
              setTodoCompleted={this.props.setTodoCompleted}
              deleteTodo={this.props.deleteTodo}
              updateTodo={this.props.updateTodo}
            />
          ))}
        </List>
      </Paper>
    );
  }
}

export default ToDosList;
