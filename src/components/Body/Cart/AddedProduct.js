import React from "react";
import './Cart.scss';
import {connect} from "react-redux";
import ADImageSet from "./AddedProductSections/ADImageSet";
import ADAmount from "./AddedProductSections/ADAmount";
import ADDescription from "./AddedProductSections/ADDescription";

class AddedProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <div className={'added-product-container'}>
            <ADDescription
                isMiniCart={this.props.isMiniCart}
                {...this.props}
            />

            <ADAmount
                isMiniCart={this.props.isMiniCart}
                amount={this.props.amount}
                id={this.props.id}
            />

            <ADImageSet
                isMiniCart={this.props.isMiniCart}
                gallery={this.props.product.gallery}
            />
          </div>
        </>
    );
  }
}

export default AddedProduct
