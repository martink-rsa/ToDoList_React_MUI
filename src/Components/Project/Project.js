import React from "react";

export default function Project(props) {
  // const {
  //   title,
  //   desc,
  //   priority,
  //   dateBegin,
  //   dateEnd,
  //   completed,
  //   projectId,
  // } = this.props.todo;
  return (
    <div>
      <span>{props.project.title} - </span>
      <span>{props.project.desc} - </span>
      <span>{props.project.icon} - </span>
      <span>{props.project.color} - </span>
    </div>
  );
}
