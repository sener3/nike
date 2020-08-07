import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="modal-section">
              <div className="col-9 col-md-6 modal-container">
                <h3>The product has been added to cart</h3>
                <div className="buttons-container">
                  <button
                    className="button-black my-2 text-capitalize"
                    onClick={value.closeModal}
                  >
                    continue shopping
                  </button>
                  <Link to="/nike/cart">
                    <button
                      onClick={value.closeModal}
                      className="button-transparent text-capitalize"
                    >
                      go to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
