import React from "react";
import './Body.scss';
import {Route, Routes} from "react-router-dom";
import {CategoryPage} from "./CategoryPage/CategoryPage";
import {ProductPage} from "./ProductPage/ProductPage";
import {Cart} from "./Cart/Cart";

export class Body extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log(
        this.props.products
    )
  }

  render() {
    return (
        <>
          {
            this.props.products.map(p =>
                <div key={p.name}>
                  <p>{p.name}</p>
                  <img src={p.gallery[0]} alt={p.name}/>
                  {/*<p>{p.prices.currency.label + " " + p.prices.currency.symbol}</p>*/}
                </div>
            )
          }
          {
            //todo add routing to default page '*'
          }
          <Routes>
            <Route path="/*" element={<CategoryPage/>}/>
            <Route path="/product-page" element={<ProductPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </>
    );
  }
}
