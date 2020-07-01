import React, { Component } from "react";
import axios from "axios";

import ItemsList from "./items-list";


export default class ItemsContainer extends Component {
  constructor() {
    super();

    this.getPHItems = this.getPHItems.bind(this);
    this.state = {
      Items: []
    };
  }

  getPHItems () {
    const validToken = '9X8KyWAJJY1GLB9zt0JVtXfIOUwZEoA1nCH3NoEexgQ';
    let config = {
      headers: {
        'Authorization': 'Bearer ' + validToken
      }
    }
    axios
    // .get("https://itunes.apple.com/search?term=beyonce&entity=musicVideo")
    .get("https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc&search[featured_month]=5&search[featured_year]=2020",
    config
    )
    .then(response => {
      console.log("response data", response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    this.getPHItems();

    return (
      <div className="items-wrapper">
        <ItemsList data={this.state.Items} />        
      </div>
    );
  }
}