/* eslint-disable object-curly-newline */
import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CssBaseline from "@material-ui/core/CssBaseline";
import ToDoList from "../ToDosList/ToDosList";
import Copyright from "../Copyright/Copyright";
import { sampleTodos, sampleProjects } from "../../sample-data";
import ToDoListAppBar from "../ToDoListAppBar/ToDoListAppBar";
import AddToDo from "../AddToDo/AddToDo";
import { generateId } from "../../helpers";
import base from "../../base";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      projects: {},
      themeMode: "dark",
      themeColors: {
        color: "orange",
        primaryMain: App.colors.orange[400], // Main button colour
        primaryDark: App.colors.orange.A700, // Highlight colour for dark mode
        secondaryMain: App.colors.orange[700], // Secondary button colour
      },
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.projects = base.syncState(`${params.listId}/projects`, {
      context: this,
      state: "projects",
    });
    this.todos = base.syncState(`${params.listId}/todos`, {
      context: this,
      state: "todos",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.todos);
    base.removeBinding(this.projects);
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

  /*   addTodo = (newTodo) => {
    this.setState((previousState) => {
      const todos = { ...previousState.todos };
      const newKey = generateId("todo", 1000, 9999);
      todos[newKey] = newTodo;
      return { todos };
    });
  }; */

  addTodo = (newTodo) => {
    const todos = { ...this.state.todos };
    const newKey = generateId("todo", 1000, 9999);
    todos[newKey] = newTodo;
    this.setState({ todos });
  };

  updateTodo = (key, updatedTodo) => {
    this.setState((previousState) => {
      const todos = { ...previousState.todos };
      todos[key] = updatedTodo;
      return { todos };
    });
  };

  /*   deleteTodo = (key) => {
    this.setState((previousState) => {
      const todos = { ...previousState.todos };
      delete todos[key];
      return { todos };
    });
  }; */

  deleteTodo = (key) => {
    console.log("DELETE TODO");
    const todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  };

  deleteTodosFromProject = (currProjectKey) => {
    this.setState((previousState) => {
      const todos = { ...previousState.todos };
      Object.keys(todos).map((curr) => {
        if (todos[curr].projectKey === currProjectKey) {
          delete todos[curr];
        }
        return true;
      });
      return { todos };
    });
  };

  addProject = (newProject) => {
    this.setState((previousState) => {
      const tempProjects = { ...previousState.projects };
      const newKey = generateId("proj", 1000, 9999);
      tempProjects[newKey] = newProject;
      return { projects: tempProjects };
    });
  };

  updateProject = (key, updatedProject) => {
    this.setState((previousState) => {
      const projects = { ...previousState.projects };
      projects[key] = updatedProject;
      return { projects };
    });
  };

  deleteProject = (key) => {
    // this.deleteTodosFromProject(key);
    this.setState((previousState) => {
      console.log(previousState);
      const projects = { ...previousState.projects };
      projects[key] = null;
      delete projects[key];
      return { projects };
    });
  };

  /* deleteProject = (key) => {
    this.deleteTodosFromProject(key);
    const projects = { ...this.state.projects };
    projects[key] = null;
    this.setState({ projects });
  }; */

  changeThemeMode = () => {
    this.setState((previousState) => {
      const { themeMode } = previousState;
      return themeMode === "dark"
        ? { themeMode: "light" }
        : { themeMode: "dark" };
    });
  };

  changeThemeColor = (color) => {
    this.setState(() => {
      const { colors } = App;
      const primaryMain = colors[color]["400"];
      const primaryDark = colors[color]["A200"];
      const secondaryMain = colors[color]["500"];
      return {
        themeColors: { color, primaryMain, primaryDark, secondaryMain },
      };
    });
  };

  loadSampleData = () => {
    this.setState({ todos: sampleTodos });
    this.setState({ projects: sampleProjects });
  };

  /*   componentDidMount = () => {
    this.loadSampleData();
  }; */

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

  static colors = {
    pink,
    red,
    blue,
    indigo,
    purple,
    deepPurple,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    grey,
    blueGrey,
  };

  render() {
    const { themeMode, themeColors, todos, projects } = this.state;
    const themeSettings = {
      root: {
        background: "ff00ff",
      },
      palette: {
        type: themeMode,
        primary: {
          main: themeColors.primaryMain,
          light: "#ffd449",
          dark: themeColors.primaryDark,
          contrastText: "#000000",
        },
        secondary: {
          main: themeColors.secondaryMain,
          light: "#ffb644",
          dark: "#c55600",
          contrastText: "#000000",
        },
        error: {
          main: red.A400,
        },
      },
    };
    return (
      <ThemeProvider theme={createMuiTheme(themeSettings)}>
        <CssBaseline />
        <ToDoListAppBar
          projects={projects}
          projectIcons={App.projectIcons}
          addProject={this.addProject}
          updateProject={this.updateProject}
          deleteProject={this.deleteProject}
          currentColor={themeColors.color}
          changeThemeMode={this.changeThemeMode}
          changeThemeColor={this.changeThemeColor}
          themeColors={App.colors}
          appBarTitle="To Do List"
        />
        <Container maxWidth="sm">
          <Box my={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadSampleData}
            >
              Load Demo Data
            </Button>{" "}
            <br />
            <br />
            <ToDoList
              todos={todos}
              projects={projects}
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

        <AddToDo
          projects={projects}
          projectIcons={App.projectIcons}
          addTodo={this.addTodo}
          projectDefault={Object.keys(projects)[0]}
        />
      </ThemeProvider>
    );
  }
}

export default App;
