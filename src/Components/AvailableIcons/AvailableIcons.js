import React from "react";
import Icon from "@material-ui/core/Icon";

const projectIcons = [
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

const ProjectIcon = (props) => <Icon>{projectIcons[props.iconIndex]}</Icon>;

export default ProjectIcon;
