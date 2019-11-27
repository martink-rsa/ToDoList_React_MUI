import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ProjectDialog from "../ProjectDialog/ProjectDialog";
import AddProject from "../AddProject/AddProject";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function ProjectsDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const {
    projects,
    projectIcons,
    addProject,
    updateProject,
    deleteProject,
  } = props;

  const toggleDrawer = (side, open) => (event) => {
    if (
      // eslint-disable-next-line operator-linebreak
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const deletionCheck = (key) => {
    if (Object.keys(projects).length > 1) {
      deleteProject(key);
    }
  };

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem button>
          <ListItemText primary="Add Project" />
          <ListItemSecondaryAction>
            <AddProject projectIcons={projectIcons} addProject={addProject} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <List>
        {Object.keys(projects).map((key) => (
          <ListItem button key={key} divider>
            <ListItemIcon>
              <Icon>{projectIcons[projects[key].icon]}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={projects[key].title}
              secondary={projects[key].desc}
            />
            <ListItemSecondaryAction>
              <ProjectDialog
                key={key}
                index={key}
                updateProject={updateProject}
                projects={projects}
                project={projects[key]}
                projectIcons={projectIcons}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deletionCheck(key)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <span>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {console.log("-----------ProjectsDrawer")}
        {console.log(projects)}

        {sideList()}
      </Drawer>
    </span>
  );
}

ProjectsDrawer.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
