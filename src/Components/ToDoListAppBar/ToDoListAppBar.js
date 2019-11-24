import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectsDrawer from "../ProjectsDrawer/ProjectsDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TodoListAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ProjectsDrawer
            projects={props.projects}
            projectIcons={props.projectIcons}
            addProject={props.addProject}
            updateProject={props.updateProject}
            deleteProject={props.deleteProject}
          />
          <Typography variant="h6" className={classes.title}>
            {props.appBarTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
