import React, { Component } from "react";

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
      
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
          className="form-input-title"
          type="text" 
          name="name" 
          placeholder="Title" 
          value={this.state.name}
          onChange={this.handleChange}>
          </input>
        </div>

        <div>
          <input 
          className="form-input-desctoption"
          type="text" 
          name="desctoption" 
          placeholder="Desctoption"
          value={this.state.desctoption}
          onChange={this.handleChange}>
          </input>
        </div>
      </form>

</div>
    );
  }
}