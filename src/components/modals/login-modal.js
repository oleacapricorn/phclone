
import React, { Component } from "react";
import ReactModal from "react-modal";

import SignInForm from '../auth/signinForm';
import Login from '../auth/login';


ReactModal.setAppElement(".app-wrapper");

export default class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: 500      
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)"
      }
    };
  }

  render() {
    return (
      <ReactModal 
      style={this.customStyles}
      onRequestClose={() => {
        this.props.handleModalClose();
      }}
      isOpen={this.props.modalIsOpen}>

        {/* <SignInForm /> */}
        <Login />

      </ReactModal>
    );
  }
}

