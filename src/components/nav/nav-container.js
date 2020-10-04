import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../modals/login-modal";

export default class NavContainer extends Component {

  constructor() {
    super();

    this.state = {
      blogModalIsOpen: false
    };

    this.handleLoginModalClick = this.handleLoginModalClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false
    });
  }

  handleLoginModalClick() {
    this.setState({
      blogModalIsOpen: true
    });
  }

  render() {
    return (
      <div className="nav-wrapper">
        <LoginModal 
        modalIsOpen={this.state.blogModalIsOpen} 
        handleModalClose={this.handleModalClose}
        />
        <div className="nav-left-side">
          <div className="logo"></div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
        </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/create" activeClassName="nav-link-active">Create</NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/view" activeClassName="nav-link-active">View</NavLink>
          </div>
        </div>

        <div className="nav-right-side">
          <NavLink to="/create" activeClassName="nav-link-active">
            <button className="add-btn">+</button>
          </NavLink>
          <button onClick={this.handleLoginModalClick}
            className="btn">Login</button>
        </div>

      </div>
    );
  }
}
