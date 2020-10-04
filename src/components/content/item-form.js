import React, { Component } from "react";
import MainButton from "./button";
import CancelButton from "./btn-cancel";


export default class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.stata.name);
    formData.append("portfolio_item[description]", this.stata.description);

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("handle change", event)
  }

  handleSubmit(event) {
    console.log("handle change", event)
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2>Post Product </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input-title">
            <input
              type="text"
              name="name"
              placeholder="Title"
              value={this.state.name}
              onChange={this.handleChange}>
            </input>
          </div>

          <div className="form-input-desctoption">
            <textarea
              type="text"
              name="desctoption"
              placeholder="Desctoption"
              value={this.state.desctoption}
              onChange={this.handleChange}>
            </textarea>
          </div>

          <div className="form-input-website">
            <input
              type="text"
              name="name"
              placeholder="Website"
              value={this.state.name}
              onChange={this.handleChange}>
            </input>
          </div>

          <div dropzone="upload">
            <input type="file" id="myfile" name="myfile">

            </input>
          </div>

        </form>

        <div className="form-btn">
          <MainButton />
          <CancelButton />
        </div>
      </div>

    );
  }
}