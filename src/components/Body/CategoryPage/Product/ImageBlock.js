import React from "react";
import {addProductToCartAction} from "../../../../redux/cart.actions";
import {connect} from "react-redux";
import getDefaultAttributes from "../../../../helpers/getDefaultAttributes";
import ShoppingCartIcon from "../../../icons/ShoppingCartIcon";

class ImageBlock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chosenAttributes: getDefaultAttributes(this.props.attributes)
    }
  }

  render() {
    return (
        <div className={'image-block ' + (!this.props.inStock ? 'out-of-stock' : '')}>
          <img
              src={this.props.gallery[0]}
              alt={this.props.name}
          />

          <div
              className={'out-of-stock-div'}
              style={{display: (!this.props.inStock) ? "block" : "none"}}
          >
            OUT OF STOCK
          </div>

          <button
              className={'add-to-cart-button button-pointer'}
              onClick={e => this.props.onAddToCart(this.props.id, this.state.chosenAttributes, this.props.prices, e)}
          >
            <ShoppingCartIcon color={'white'}/>
          </button>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddToCart: (productID, attributes, prices, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProductToCartAction(productID, attributes, prices));
  }
})

export default connect(null, mapDispatchToProps)(ImageBlock)
