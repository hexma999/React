import React from "react";

function Hi(props) {
  return <div style={{ color: props.color }}>하이!{props.name}</div>;
}

export default Hi;
