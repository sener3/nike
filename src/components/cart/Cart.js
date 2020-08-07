import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartProducts from "./CartProducts";
import CartTotals from "./CartTotals";
export class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length >= 0) {
            return (
              <React.Fragment>
                <CartProducts value={value} />
                <CartTotals value={value} />
              </React.Fragment>
            );
          } else {
            return <h1>The cart is empty</h1>;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
