import React from "react";
import "./index.css";

export default function CardContainer(props) {
  return <div className="container card-container">{props.children}</div>;
}
