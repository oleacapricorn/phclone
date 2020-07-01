import React from "react";

import BackBtn from "../content/back-button";
import CreateItemContainer from "../content/create-item-container";

export default function() {
  return (
    <div className="content-wrapper">
      <BackBtn />
      <h2>Create Item </h2>
       
      <div>
        <CreateItemContainer />
      </div>
    </div>
  );
}