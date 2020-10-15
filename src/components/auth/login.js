
import React, { Component } from "react";
import axios from "axios";

import LoginButton from "./button-login";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios.post("https://dev-31r1o3t0.eu.auth0.com/api/v2/",
    {
    secret: "ce3aeba14a46f6ed8d4183a4af9c099299d75", 
    payload: {email: this.state.email,
    password: this.state.password}
  },
  { withCredentials: true }
    )
    event.preventDefault();
  }

  
  render() {
    return (
      <div>
        <h1>LOGIN</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <p>Account for test: </p>

      </div>
    );
  }
}