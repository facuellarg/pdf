import React, { Fragment, useState } from "react";
import classes from "./CollapseBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface CollapseBarProps extends React.PropsWithChildren {
  title: string;
}

const CollapseBar: React.FC<CollapseBarProps> = (props) => {
  const [isCollapse, setIsCollapsed] = useState(true);
  const onChangeCollapseState = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <Fragment>
      <div className={classes["collapse-bar"]} onClick={onChangeCollapseState}>
        {isCollapse && <span>{props.title}</span>}
        <FontAwesomeIcon icon={isCollapse ? faCaretDown : faCaretUp} />
      </div>
      {!isCollapse && (
        <div
          className={classes["collapse-bar__children"]}
          // style={{
          //   display: isCollapse ? "none" : "initial",
          //   // visibility: isCollapse ? "hidden" : "initial",
          // }}
        >
          {props.children}
        </div>
      )}
    </Fragment>
  );
};

export default CollapseBar;
