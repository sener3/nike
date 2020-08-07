import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Product from "./Product";
import Modal from "../modal/Modal";
export class Products extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="row">
              {value.products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
              {value.openModal === false ? null : <Modal />}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Products;
