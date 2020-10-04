import React from "react";

import ItemsContainer from "../content/items-container";
import DBItemsContainer from "../content/ph-db-posts";


export default function () {
  return (
    <div className="main-wrapper">
      <div className="items-container">

        <div >
          <ItemsContainer />
        </div>
        <div >
          <DBItemsContainer />
        </div>
      </div>
    </div>

  );
}

