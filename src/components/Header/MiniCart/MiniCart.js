import React from "react";
import {connect} from "react-redux";
import './MiniCart.scss';
import getProductsAmountFromCart from "../../../helpers/getProductsAmountFromCart";
import {hideMiniCart} from "../../../redux/minicart.actions";

class MiniCart extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.miniCartVisibility);
    return (
        <div
            className={'mini-cart-container'}
            // style={{display: this.props.miniCartVisibility ? 'flex' : 'none'}}
        >
          <h3>My Bag, {this.props.productsAmount} item{ this.props.productsAmount > 1? 's':''}</h3>


          <button onClick={this.onViewBagClick}>
            VIEW BAG
          </button>
          <button>
            CHECK OUT
          </button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  productsAmount: getProductsAmountFromCart(state.cart),
  miniCartVisibility: state.miniCartDisplay,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  hideMiniCart: () => dispatch(hideMiniCart())
  // onAddToCart: (id, attributes, amount) => dispatch(changeProductAmount(id, attributes, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)
