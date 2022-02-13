import React from "react";
import './Body.scss';
import {Route, Routes} from "react-router-dom";
import CategoryPage from "./CategoryPage/CategoryPage";
import {ProductPage} from "./ProductPage/ProductPage";
import {Cart} from "./Cart/Cart";
import { Navigate } from 'react-router'

export class Body extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   console.log(
  //       this.props.products
  //   )
  // }

  render() {
    return (
        <>
          {/*{*/}
          {/*  this.props.products.map(p =>*/}
          {/*      <div key={p.name}>*/}
          {/*        <p>{p.name}</p>*/}
          {/*        <img src={p.gallery[0]} alt={p.name}/>*/}
          {/*        /!*<p>{p.prices.currency.label + " " + p.prices.currency.symbol}</p>*!/*/}
          {/*      </div>*/}
          {/*  )*/}
          {/*}*/}
          {/*{*/}
          {/*  //todo add routing to default page '*'*/}
          {/*}*/}
          <Routes>
            .
            {/*<Route path="/categories" element={<CategoryPage/>}/>*/}
            {/*<Route path="/categories/" element={<Navigate to="/categories/all"/>}>*/}
              <Route path="/categories/all" element={<CategoryPage />} />
              <Route path="/categories/clothes" element={<CategoryPage />} />
              <Route path="/categories/tech" element={<CategoryPage />} />
            {/*</Route>*/}
            <Route path="/product-page" element={<ProductPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route exact path="/*" element={<Navigate to="/categories/all"/>}/>
          </Routes>
        </>
    );
  }
}
