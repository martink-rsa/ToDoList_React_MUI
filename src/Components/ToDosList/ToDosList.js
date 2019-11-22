/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDo from "../ToDo/ToDo";

class ToDosList extends React.Component {
  render() {
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
