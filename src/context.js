import React, { Component } from "react";
import { storeProducts } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    productTotal: 0,
    cartTotal: 0,
    openModal: false,
    inputValue: "",
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  filterProducts = (category, subcategory) => {
    let filterProducts = [];
    storeProducts.map((product) => {
      if (
        product.category === category &&
        product.subcategory === subcategory
      ) {
        filterProducts = [...filterProducts, product];
      }
    });
    this.setState(() => {
      return { products: filterProducts };
    });
  };

  filterProductsBySearch = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    if (this.state.inputValue !== "") {
      const filterProducts = this.state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase());
      });
      this.setState({
        products: filterProducts,
      });
    } else {
      this.setProducts();
    }
  };

  getProductId = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProductId(id));
    const product = tempProducts[index];
    product.count = 1;
    product.total = product.price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          openModal: true,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  closeModal = () => {
    this.setState(() => {
      return {
        openModal: false,
      };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
    console.log(product.total);
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let total = 0;
    this.state.cart.map((item) => (total += item.total));
    this.setState(() => {
      return { cartTotal: total };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filterProducts: this.filterProducts,
          addToCart: this.addToCart,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          filterProductsBySearch: this.filterProductsBySearch,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
