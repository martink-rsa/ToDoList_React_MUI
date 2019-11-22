import React from "react";
import Project from "../Project/Project";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

const ProjectsList = function ProjectsList(props) {
  return (
    <Paper>
      <List>
        {Object.keys(props.projects).map((key) => (
          <Project key={key} index={key} project={props.projects[key]} />
        ))}
      </List>
    </Paper>
  );
};

export default ProjectsList;
