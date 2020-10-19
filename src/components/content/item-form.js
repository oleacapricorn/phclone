import React, { Component } from "react";
import MainButton from "./button";
import axios from "axios";
import { History } from 'react-router-dom';


export default class ItemForm extends Component {
  constructor(proprs) {
    super(proprs);

    this.state = {
      title: '',
      description: '',
      website: '',
      img:[],
      status: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testFunc = this.testFunc.bind(this);
    
  }

  buildForm() {
let formData = new FormData();

formData.append('posts[title]', this.state.title);
formData.append('post-file', file, file.name);

return formData;
  }

  handleSubmit(event) {
    const validToken = 'ce3aeba14a46f6ed8d4183a4af9c099299d75';
  
    let data_ = {
      headers: {
        "content-type": "application/json",
        "x-apikey": validToken,
        "cache-control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios.post("https://cors-anywhere.herokuapp.com/https://phclone-24db.restdb.io/rest/posts",
    
      {
        "title": this.state.title,
        "description": this.state.description,
        "website": this.state.website,
        "upvotes": "0",
        "img": this.state.img
    },
      data_
      )

      .then(response => {
       console.log("response data", response);
       console.log("state values", this.state.title);
      this.props.handleSuccessfullFormSubmission(response.data);
      if (response.status === 201) {
      //  window.location.reload();
       window.location.href = "/view";
    }
})
      .catch(error => {
        console.log("handleSubmit for post error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  
  render() {
    return (      
      <div className="form-wrapper">
        <h2>Post Product </h2>
        <form 
         onSubmit={this.handleSubmit}
        >

          <div className="form-input-title">
            <input
              type="text"
              name="title"
              placeholder="Title"
             value={this.state.title}
             onChange={this.handleChange}
              >
            </input>
          </div>

          <div className="form-input-desctoption">
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
              >
            </textarea>
          </div>

          <div className="form-input-website">
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={this.state.website}
              onChange={this.handleChange}
              >
            </input>
          </div>

          <div dropzone="upload">
            <input type="file" 
            id="post-file" 
            name="img"
            value={this.state.img}
            onChange={this.handleChange}
            >
            </input>
          </div>
          <MainButton />
        </form>
      </div>

    );
  }
}
