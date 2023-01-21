import React from "react";
import Input from "../../UI/Input";
import classes from "./WorkExperience.module.css";
import { useDispatch } from "react-redux";
import { WorkExperienceActions } from "../../../store/work-experience";

const WorkExperienceForm: React.FC<{
  index: number;
}> = (props) => {
  const dispatch = useDispatch();

  const onUpdateValue = (field: string) => {
    return (event: React.ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      const experience = {} as any;
      experience[field] = target.value;
      dispatch(
        WorkExperienceActions.UpdateExperience({
          index: props.index,
          experience,
        })
      );
    };
  };

  return (
    <form className={classes["work-experience"]}>
      <div className={classes.dates}>
        <Input
          id="start_date"
          label="Start Date"
          type="date"
          onChange={onUpdateValue("start")}
        />
        <Input
          id="end_date"
          label="End Date"
          type="date"
          onChange={onUpdateValue("end")}
        />
      </div>
      <div className={classes.dates}>
        <Input
          id="rol"
          label="Rol:"
          type="text"
          onChange={onUpdateValue("rol")}
        />
        <Input
          id="company"
          label="Company: "
          type="text"
          onChange={onUpdateValue("company")}
        />
      </div>
      <div className={classes.description}>
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          onChange={onUpdateValue("description")}
        ></textarea>
      </div>
      {/* <div className={classes.actions}>
        <button>Cancel</button>
        <button>Save</button>
      </div> */}
    </form>
  );
};

export default WorkExperienceForm;
