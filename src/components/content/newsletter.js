import React, { Component } from "react";
import ConfirmModal from "../modals/confirmation";


export default class Newsletter extends Component {

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
      <div className="news-wrapper" >
                <ConfirmModal
          modalIsOpen={this.state.blogModalIsOpen}
          handleModalClose={this.handleModalClose}
        />
        <div className="news-container">

        <div className="heading">Get the best new products in your inbox👇</div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
          >
          </input>
          <button type="submit" className="btn" onClick={this.handleLoginModalClick}>Subscribe</button>
        </div>

      </div>
    );
  }
}