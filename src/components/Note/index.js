import React from "react";
import "./index.css";

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Note(props) {
  const [rotation, setRotation] = React.useState(0);
  const [color, setColor] = React.useState("white");

  const colors = ["#ead3a7", "#9de0f5", "#ef89ba", "#fae890", "#abe9c1"];

  React.useEffect(() => {
    setRotation(randomInt(-7, 7));
  }, []);

  React.useEffect(() => {
    setColor(colors[randomInt(0, colors.length - 1)]);
  }, []);

  const style = { transform: `rotate(${rotation}deg)`, backgroundColor: color };

  return (
    <div className="card" style={style}>
      <h3 className="card-title">{props.title}</h3>
      <div className="card-content">{props.children}</div>
    </div>
  );
}
