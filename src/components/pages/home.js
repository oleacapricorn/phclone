import React from "react";

import ItemsContainer from "../content/items-container";
import DBItemsContainer from "../content/ph-db-posts";


export default function () {
  return (
    <div className="main-wrapper">
      <div className="items-container">
        <div className="items-container-left">
          <ItemsContainer />
        </div>
        <div className="items-container-right">
          <DBItemsContainer />
        </div>
      </div>
    </div>

  );
}

