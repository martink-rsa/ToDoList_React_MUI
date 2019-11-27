import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ProjectsDrawer from "../ProjectsDrawer/ProjectsDrawer";
import SettingsDialog from "../SettingsDialog/SettingsDialog";
import NightModeToggle from "../NightModeToggle/NightModeToggle";

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

export default function ToDoListAppBar(props) {
  const classes = useStyles();

  const {
    projects,
    projectIcons,
    addProject,
    updateProject,
    deleteProject,
    appBarTitle,
    currentColor,
    changeThemeMode,
    changeThemeColor,
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ProjectsDrawer
            projects={projects}
            projectIcons={projectIcons}
            addProject={addProject}
            updateProject={updateProject}
            deleteProject={deleteProject}
          />
          <Typography variant="h6" className={classes.title}>
            {appBarTitle}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <NightModeToggle changeThemeMode={changeThemeMode} />
          <SettingsDialog
            currentColor={currentColor}
            changeThemeColor={changeThemeColor}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToDoListAppBar.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  appBarTitle: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  changeThemeMode: PropTypes.func.isRequired,
  changeThemeColor: PropTypes.func.isRequired,
};
