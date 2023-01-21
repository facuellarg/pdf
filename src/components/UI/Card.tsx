import React from "react";
import classes from "./Card.module.css";
interface CardProps extends React.PropsWithChildren {
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const className = `${classes.card}  ${
    props.className ? props.className : ""
  }`;
  return <div className={className}>{props.children}</div>;
};

export default Card;
