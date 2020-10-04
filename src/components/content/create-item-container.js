import React, { Component } from "react";

import ItemForm from "./item-form";


export default class CreateItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      Items: []
    };
  }

  render() {
    return (
      <div>
        <ItemForm />
      </div>
    );
  }
}