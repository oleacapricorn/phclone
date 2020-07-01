import React, { Component } from "react";

import ItemForm from "./item-form";
import MainButton from "./button";

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
  <MainButton /> 
</div>
    );
  }
}