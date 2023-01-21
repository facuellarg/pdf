import Canvas from "./components/Canvas/Canvas";
import Form from "./components/Form/Form";
import classes from "./App.module.css";
import { useRef } from "react";
import jsPDF from "jspdf";

function App() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const onDownload = () => {
    if (!canvasRef.current) {
      return;
    }
    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;
    console.log(width, height);
    const doc = new jsPDF("p", "px", [width, height]);
    doc.html(canvasRef.current, {
      async callback(doc: jsPDF) {
        await doc.save("document");
      },
    });
  };

  return (
    <>
      <button
        style={{
          position: "fixed",
        }}
        onClick={onDownload}
      >
        Download as pdf
      </button>
      <div className={classes.app}>
        <Form />
        <Canvas ref={canvasRef} />
      </div>
    </>
  );
}

export default App;
