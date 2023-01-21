import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { WorkExperience } from "../../../../store/work-experience";
import WorkExperienceCanvas from "./WorkExperienceCanvas";
import classes from "./WorkExperiencesCanvas.module.css";

type Props = {};

const compareExperiencesByDate = (
  a: Partial<WorkExperience>,
  b: Partial<WorkExperience>
) => {
  const aDate = new Date(a.start!);
  const bDate = new Date(b.start!);
  return aDate.getTime() < bDate.getTime() ? 1 : -1;
};

const WorkExperiencesCanvas = (props: Props) => {
  const experiences = useSelector((state: RootState) => state.workExperiences);
  const experiencesElements = experiences.experiences
    .filter((experience) => {
      return experience.end && experience.start;
    })
    .slice(0)
    .sort(compareExperiencesByDate)
    .map((experience) => {
      return (
        <WorkExperienceCanvas
          key={Math.random()}
          start={experience.start!}
          end={experience.end!}
          company={experience.company!}
          rol={experience.rol!}
          id={experience.id!}
          description={experience.description!}
        />
      );
    });
  return (
    <div className={classes.container}>
      {experiencesElements.length > 0 && <p>Employment History</p>}
      <div>{experiencesElements}</div>
    </div>
  );
};

export default WorkExperiencesCanvas;
