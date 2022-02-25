import React from "react";
import './Body.scss';
import {Route, Routes} from "react-router-dom";
import CategoryPage from "./CategoryPage/CategoryPage";
import ProductPage from "./ProductPage/ProductPage";
import Cart from "./Cart/Cart";
import {Navigate} from 'react-router'
import ShadowBlock from "./ShadowBlock";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <main>
          <Routes>
            <Route exact path="/categories/:category" element={<CategoryPage  />}/>
            <Route exact path="/products/:productID" element={<ProductPage />}/>
            <Route exact path="/cart" element={<Cart />}/>
            <Route exact path="/*" element={<Navigate to="/categories/all"/>}/>
          </Routes>
          <ShadowBlock/>
        </main>
    );
  }
}

export default Body
