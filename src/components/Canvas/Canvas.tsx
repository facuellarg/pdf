import Body from "./Body/Body";
import Header from "./Header/Header";
import classes from "./Canvas.module.css";
import React from "react";
// Create styles
//
const Canvas = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.pdf} ref={ref}>
      <Header />
      <Body></Body>
    </div>
  );
});

export default Canvas;
