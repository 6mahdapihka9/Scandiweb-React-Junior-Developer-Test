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
          <hr/>
          <div className={'added-product-container'}>
            <ADDescription {...this.props}/>

            <ADAmount
                amount={this.props.amount}
                id={this.props.id}
            />

            <ADImageSet gallery={this.props.product.gallery}/>
          </div>
        </>
    );
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(AddedProduct)
