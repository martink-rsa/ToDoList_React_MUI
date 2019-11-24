import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";
import ToDoList from "../ToDosList/ToDosList";
import Copyright from "../Copyright/Copyright";
import { sampleTodos, sampleProjects } from "../../sample-data";
import TodoListAppBar from "../ToDoListAppBar/ToDoListAppBar";
import AddToDo from "../AddToDo/AddToDo";
// import { theme2 } from "../../theme";
import { generateId } from "../../helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      projects: {},
      themeMode: "dark",
      themeColors: {
        primaryMain: "#ffa300", // Main button colour
        primaryDark: "#ffa300", // Highlight colour for dark mode
        secondaryMain: "#ff8500", // Secondary button colour
      },
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

  addTodo = (newTodo) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      const newKey = generateId("todo", 1000, 9999);
      tempTodos[newKey] = newTodo;
      return { todos: tempTodos };
    });
  };

  updateTodo = (key, updatedTodo) => {
    const tempTodos = { ...this.state.todos };
    tempTodos[key] = updatedTodo;
    this.setState({ todos: tempTodos });
  };

  deleteTodo = (key) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      delete tempTodos[key];
      return { todos: tempTodos };
    });
  };

  deleteTodosFromProject = (currProjectKey) => {
    this.setState((previousState) => {
      const tempTodos = { ...previousState.todos };
      Object.keys(tempTodos).map((curr) => {
        if (tempTodos[curr].projectKey === currProjectKey) {
          delete tempTodos[curr];
        }
        return true;
      });
      return { todos: tempTodos };
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
    const tempProjects = { ...this.state.projects };
    tempProjects[key] = updatedProject;
    this.setState({ projects: tempProjects });
  };

  deleteProject = (key) => {
    this.deleteTodosFromProject(key);
    this.setState((previousState) => {
      const tempProjects = { ...previousState.projects };
      delete tempProjects[key];
      return { projects: tempProjects };
    });
  };

  changeThemeMode = () => {
    console.log("Changing theme mode");
    if (this.state.themeMode === "dark") {
      this.setState({ themeMode: "light" });
    } else {
      this.setState({ themeMode: "dark" });
    }
  };

  changeThemeColor = (newColor) => {
    const themeColors = { ...this.state.themeColors };
    themeColors.primaryMain = App.colors[newColor][400];
    themeColors.primaryDark = App.colors[newColor]["A200"];
    themeColors.secondaryMain = App.colors[newColor][700];
    this.setState({ themeColors });
  };

  loadSampleData = () => {
    this.setState({ todos: sampleTodos });
    this.setState({ projects: sampleProjects });
  };

  componentDidMount = () => {
    this.loadSampleData();
  };

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
    red,
    pink,
    blue,
  };

  render() {
    const themeSettings = {
      palette: {
        type: this.state.themeMode,
        primary: {
          main: this.state.themeColors.primaryMain,
          light: "#ffd449",
          dark: this.state.themeColors.primaryDark,
          contrastText: "#000000",
        },
        secondary: {
          main: this.state.themeColors.secondaryMain,
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
      // <ThemeProvider theme={createMuiTheme(theme2)}>
      <ThemeProvider theme={createMuiTheme(themeSettings)}>
        <CssBaseline />
        <TodoListAppBar
          projects={this.state.projects}
          projectIcons={App.projectIcons}
          addProject={this.addProject}
          updateProject={this.updateProject}
          deleteProject={this.deleteProject}
          appBarTitle="To Do List"
        />
        <Container maxWidth="sm">
          <Box my={4}>
            {/* <Header headerTitle="To Do List" /> */}
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadSampleData}
            >
              Load Demo Data
            </Button>{" "}
            <Button
              variant="contained"
              color="primary"
              onClick={this.changeThemeMode}
            >
              Change Mode
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.changeThemeColor("red")}
            >
              Change Color
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

        <AddToDo
          projects={this.state.projects}
          projectIcons={App.projectIcons}
          addTodo={this.addTodo}
        />
      </ThemeProvider>
    );
  }
}

export default App;
