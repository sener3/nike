import React, { Component } from "react";
import { ProductConsumer } from "../../context";

export class Product extends Component {
  render() {
    const { img, title, price, id } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="card col-10 col-md-6 col-lg-3 m-4 text-center">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <div className="row">
                  <h5 className="card-title col-8">{title}</h5>
                  <p className="card-title col-4">{price}$</p>
                </div>
                <a
                  onClick={() => value.addToCart(id)}
                  className="btn col-12 my-3 text-uppercase"
                >
                  add to cart
                </a>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;
