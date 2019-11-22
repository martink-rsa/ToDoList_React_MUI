import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import logo from "../../assets/images/logo.svg";
import Header from "../Header/Header";
import ProTip from "../ProTip/ProTip";
import ToDoList from "../ToDosList/ToDosList";
import ProjectsList from "../ProjectsList/ProjectsList";
import Copyright from "../Copyright/Copyright";
import { sampleTodos, sampleProjects } from "../../sample-data";
import TodoListAppBar from "../ToDoListAppBar/ToDoListAppBar";

class App extends React.Component {
  static projectIcons = [
    "face",
    "fastfood",
    "favorite",
    "fitness_center",
    "home_work",
    "local_grocery_store",
    "menu_book",
    "sports_esports",
    "sports_football",
    "work",
  ];
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      projects: {},
    };
  }

  setTodoCompleted = (key) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      tempTodos[key] = {
        ...tempTodos[key],
        completed: !tempTodos[key].completed,
      };
      return { todos: tempTodos };
    });
  };

  deleteTodo = (key) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      delete tempTodos[key];
      return { todos: tempTodos };
    });
  };

  updateTodo = (key, updatedTodo) => {
    const tempTodos = { ...this.state.todos };
    tempTodos[key] = updatedTodo;
    this.setState({ todos: tempTodos });
  };

  deleteTodosFromProject = (currProjectKey) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      Object.keys(tempTodos).map((curr) => {
        if (tempTodos[curr].projectKey === currProjectKey) {
          delete tempTodos[curr];
        }
      });
      return { todos: tempTodos };
    });
  };

  deleteProject = (key) => {
    this.deleteTodosFromProject(key);
    this.setState((previousState) => {
      const tempProjects = { ...previousState.projects };
      delete tempProjects[key];
      return { projects: tempProjects };
    });
  };

  loadSampleData = () => {
    this.setState({ todos: sampleTodos });
    this.setState({ projects: sampleProjects });
  };

  componentDidMount = () => {
    this.loadSampleData();
  };

  render() {
    return (
      <Container maxWidth="sm">
        <TodoListAppBar
          projects={this.state.projects}
          projectIcons={App.projectIcons}
          deleteProject={this.deleteProject}
          appBarTitle="To Do List"
        />
        <Box my={4}>
          {/* <Header headerTitle="To Do List" /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={this.loadSampleData}
          >
            Load Demo Data
          </Button>
          {/* <ProTip /> */}
          <br />
          <br />
          <ToDoList
            todos={this.state.todos}
            projects={this.state.projects}
            projectIcons={App.projectIcons}
            setTodoCompleted={this.setTodoCompleted}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          />
          <Copyright
            urlText="To Do List"
            urlLink="https://www.github.com/martink-rsa/"
          />
        </Box>
      </Container>
    );
  }
}

export default App;
