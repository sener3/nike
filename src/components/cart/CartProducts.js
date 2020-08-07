import React from "react";
import CartItem from "./CartItem";

const CartProducts = ({ value }) => {
  const { cart } = value;

  return (
    <div className="products-container">
      {cart.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartProducts;
