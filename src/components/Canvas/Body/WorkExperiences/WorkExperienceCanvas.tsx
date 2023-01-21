import React from "react";
import { WorkExperience } from "../../../../store/work-experience";
import classes from "./WorkExperienceCanvas.module.css";
import { ConcatString } from "../../../../utils/strings-utils";

// const options = {
//   day: "numeric",
//   year: "numeric",
//   month: "short",
// } satisfies Intl.DateTimeFormatOptions;

const WorkExperienceCanvas: React.FC<WorkExperience> = (props) => {
  const title = ConcatString(props.rol, props.company, " at");

  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <div className={classes.dates}>
        <span>{`${props.start} - ${props.end}`}</span>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default WorkExperienceCanvas;
