import PersonalInfo from "./PersonalInfo/PersonalInfo";
import classes from "./Form.module.css";
import WorkExperiences from "./WorkExperiences/WorkExperiences";
import CollapseBar from "../UI/CollapseBar";

const Form: React.FC = (props) => {
  return (
    <div className={classes.form}>
      <CollapseBar title="Personal Info">
        <PersonalInfo></PersonalInfo>
      </CollapseBar>
      <CollapseBar title="Work Experiences">
        <WorkExperiences />
      </CollapseBar>
    </div>
  );
};

export default Form;
