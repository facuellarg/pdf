import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { RootState } from "../../../store";
import { ConcatString } from "../../../utils/strings-utils";
const Header = () => {
  const { image, name, city, country, email, jobTitle, phone } = useSelector(
    (state: RootState) => state.personalInfo
  );

  const location = ConcatString(country, city);
  const contactInfo = ConcatString(phone, email);
  const title = ConcatString(name, jobTitle);
  return (
    <div className={classes.header}>
      <div className={classes["img__container"]}>
        {image && <img src={image} alt="" />}
      </div>
      <div className={classes["contact-info"]}>
        <p>{`${location}`}</p>
        <div>
          <p>{contactInfo}</p>
        </div>
      </div>
      <img alt="" />
      <div className={classes.name}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Header;
