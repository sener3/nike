import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./components/style/style.scss";
import Cart from "./components/cart/Cart";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/product/Products";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/nike" component={Products}></Route>
        <Route exact path="/nike/cart" component={Cart}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
