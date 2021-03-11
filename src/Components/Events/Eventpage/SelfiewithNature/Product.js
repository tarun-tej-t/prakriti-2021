import React, { Component } from "react";

import Modal from "./Modal";

import "./Product.css";

class Product extends Component {
  state = {
    showModal: 0,
  };

  getModal = (value) => {
    this.setState({ showModal: value });
  };

  hideModal = (value) => {
    this.setState({ showModal: 0 });
  };

  render() {
    return (
      <div className="container">
        {this.props.data.map((data, key) => (
          <div key={key} className="small1">
            <button
              onClick={() => this.getModal(data.id)}
              style={{ color: "whitesmoke" }}
            >
              Know more
            </button>&ensp;
            <a
              href="http://tiny.cc/SelfiewithNature"
              target="_blank"
            >
              <button style={{ color: "whitesmoke" }}>My Submission</button>
            </a>

            <Modal
              show={this.state.showModal === data.id}
              onHide={() => this.hideModal(data.id)}
              name={data.name}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
