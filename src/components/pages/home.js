import React from "react";

import ItemsContainer from "../content/items-container";
import ItemsContainerLast from "../content/items-last-month";

import DBItemsContainer from "../content/ph-db-posts";
import Newsletter from "../content/newsletter";



export default function () {
  return (
    <div className="main-wrapper">
      <div className="items-container">
        <div>
          <ItemsContainer />
          <ItemsContainerLast/>
        </div>
        <div>
          <DBItemsContainer />
          <Newsletter />
        </div>
      </div>
    </div>

  );
}

