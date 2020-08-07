import React from "react";
import { ProductConsumer } from "../../context";

const CartItem = (props) => {
  const { title, total, img, id, count } = props.product;
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="row">
            <img
              className="card-img-top col-10 col-lg-2 py-3"
              src={img}
              alt="Card image cap"
            />
            <h5 className="card-title col-10 col-lg-2">{title}</h5>
            <div className="row col-10 col-lg-2">
              <button
                className="count-button"
                onClick={() => value.decrement(id)}
              >
                -
              </button>
              <p className="mx-3 mb-0">{count}</p>
              <button
                className="count-button"
                onClick={() => value.increment(id)}
              >
                +
              </button>{" "}
            </div>

            <button
              className="col-10 col-lg-2 my-3 button-black"
              onClick={() => value.removeItem(id)}
            >
              <i className="fas fa-trash-alt"></i>{" "}
            </button>
            <p className="card-title text-center col-10 col-lg-2">{total}$</p>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default CartItem;
