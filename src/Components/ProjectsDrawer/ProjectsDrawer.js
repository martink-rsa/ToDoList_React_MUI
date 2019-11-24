import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ProjectDialog from "../ProjectDialog/ProjectDialog";
import Icon from "@material-ui/core/Icon";

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
        <ListItem button divider>
          <ListItemText primary="Add Project" />
          <ListItemSecondaryAction>
            {/* <ProjectDialog
              // index={this.props.index}
              projects={props.projects}
              project={props.projects[key]}
            /> */}
            <IconButton
              edge="end"
              aria-label="add"
              // onClick={() => props.deleteProject(key)}
              // onClick={() => this.props.deleteTodo(this.props.index)}
            >
              <AddCircleIcon color="primary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <List>
        {Object.keys(props.projects).map((key) => (
          <ListItem button key={key} divider>
            <ListItemIcon>
              <Icon>{props.projectIcons[props.projects[key].icon]}</Icon>
            </ListItemIcon>
            <ListItemText primary={props.projects[key].title} />
            <ListItemSecondaryAction>
              <ProjectDialog
                // index={this.props.index}
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
