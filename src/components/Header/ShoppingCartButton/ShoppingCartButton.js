import React from "react";
import './ShoppingCartButton.scss';
import {connect} from "react-redux";
import getProductsAmountFromCart from "../../../helpers/getProductsAmountFromCart";
import {toggleMiniCartAction} from '../../../redux/minicart.actions';
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";

class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button
            className={'mini-cart-button button-pointer'}
            onClick={this.props.onToggleMiniCart}
        >
          {
            this.props.productsAmount?
            <div className={'products-amount'}>
              {this.props.productsAmount}
            </div>:null
          }
          <ShoppingCartIcon color={'black'}/>
        </button>
    );
  }
}

const mapStateFromProps = (state) => ({
  productsAmount: getProductsAmountFromCart(state.cart),
  isMiniCartVisible: state.miniCartDisplay,
})

const mapDispatchFromProps = (dispatch) => ({
  onToggleMiniCart: () => dispatch(toggleMiniCartAction())
})

export default connect(mapStateFromProps, mapDispatchFromProps)(ShoppingCartButton)
