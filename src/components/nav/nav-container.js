import React, { Component } from "react";
import { NavLink } from "react-router-dom"


export default class NavContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
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
            <NavLink to="/edit" activeClassName="nav-link-active">Edit</NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/view" activeClassName="nav-link-active">View</NavLink>
          </div>
        </div>
        <div className="nav-right-side"> 
          <button className="btn"> Add Post</button>
        </div>
      </div>
    );
  }
}
