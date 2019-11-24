import React from "react";
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

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Add Project" />
          <ListItemSecondaryAction>
            {/*             <IconButton edge="end" aria-label="add">
              <AddCircleIcon color="primary" />
            </IconButton> */}
            <AddProject
              projectIcons={props.projectIcons}
              addProject={props.addProject}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <List>
        {Object.keys(props.projects).map((key) => (
          <ListItem button key={key} divider>
            <ListItemIcon>
              <Icon>{props.projectIcons[props.projects[key].icon]}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={props.projects[key].title}
              secondary={props.projects[key].desc}
            />
            <ListItemSecondaryAction>
              <ProjectDialog
                key={key}
                index={key}
                updateProject={props.updateProject}
                projects={props.projects}
                project={props.projects[key]}
                projectIcons={props.projectIcons}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.deleteProject(key)}
                // onClick={() => this.props.deleteTodo(this.props.index)}
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
        {sideList("left")}
      </Drawer>
    </span>
  );
}
