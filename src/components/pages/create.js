import React from "react";

import UpvoteBtn from "../content/upvote-button";
import CreateItemContainer from "../content/create-item-container";

export default function() {
  return (
    <div className="content-wrapper">
      <UpvoteBtn />
      <h2>Create Item </h2>
       
      <div>
        <CreateItemContainer />
      </div>
    </div>
  );
}