import React, { Component } from "react";
import { NavLink } from "react-router-dom"


export default class FooterContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="nav-wrapper">
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>

        <NavLink exact to="/create" activeClassName="nav-link-active">Create</NavLink>
        <NavLink exact to="/edit" activeClassName="nav-link-active">Edit</NavLink>
        <NavLink exact to="/view" activeClassName="nav-link-active">View</NavLink>
        
      </div>
          );
        }
      }
