
import React, { Component } from "react";
import ReactModal from "react-modal";


ReactModal.setAppElement(".app-wrapper");

export default class ConfirmModal extends Component {
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
<div className="news-container">
<div className="heading">
  <h3>Thanks You For Subscribing!</h3>
  <h5>we will keep you up to date with every friday email</h5>
  </div>

</div>
      </ReactModal>
    );
  }
}

