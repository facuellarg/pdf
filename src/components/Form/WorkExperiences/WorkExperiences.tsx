import WorkExperienceForm from "./WorkExperienceForm";
import Card from "../../UI/Card";
import classes from "./WorkExperiences.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { WorkExperienceActions } from "../../../store/work-experience";
import { v4 } from "uuid";
type Props = {};

const WorkExperiences = (props: Props) => {
  const experiences = useSelector((state: RootState) => state.workExperiences);
  const dispatch = useDispatch();

  const onCancel = (index: number) => {
    return () => {
      dispatch(
        WorkExperienceActions.RemoveExperience({
          index,
        })
      );
    };
  };

  const addExperiencesHandler = () => {
    dispatch(WorkExperienceActions.AddExperience({ id: v4() }));
  };
  return (
    <div className={classes["work-experiences"]}>
      <button onClick={addExperiencesHandler}>Add Experience</button>
      {experiences.experiences
        .slice(0)
        .reverse()
        .map((experience, index) => {
          const currentIndex = experiences.experiences.length - 1 - index;
          return (
            <Card key={experience.id}>
              <WorkExperienceForm index={currentIndex} />
              <button onClick={onCancel(currentIndex)}>Delete</button>
            </Card>
          );
        })}
    </div>
  );
};

export default WorkExperiences;
