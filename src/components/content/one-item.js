import React from "react";

export default function(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.date}</h5>
      <h6>{props.url}</h6>
    </div>
  );
}