import React, { Component } from "react";

import ItemForm from "./item-form";


export default class CreateItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      Items: []
    };

  this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(
    this
  );
}

handleSuccessfullFormSubmission(post) {
  console.log("create post form", post);
}

  render() {
    return (
      <div className='create-form-warapper'>
        <ItemForm 
       handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission}
        />
      </div>
    );
  }
}