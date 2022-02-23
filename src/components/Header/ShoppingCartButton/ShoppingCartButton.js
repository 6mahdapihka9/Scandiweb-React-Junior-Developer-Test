import React from "react";
import './ShoppingCartButton.scss';
// import Logo from '../../../assets/shopping-cart-10925.svg';
// import Icon from "./ShoppingCartIcon";
import {connect} from "react-redux";
import getProductsAmountFromCart from "../../../helpers/getProductsAmountFromCart";
import {toggleMiniCart} from '../../../redux/minicart.actions';
import miniCartDisplay from "../../../redux/reducers/minicart.reducer";
import {withRouter} from "../../../hooks/withRouter";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";

class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onViewBagClick = () => {
    this.props.navigate('/cart')
  }

  render() {
    return (
        <>
          <button className={'mini-cart-button button-pointer'} onClick={this.props.onToggleMiniCart}>
            {
              //todo add onclick handler to show cart's info
              this.props.productsAmount ?
                  <div className={'products-amount'}>
                    {this.props.productsAmount}
                  </div> :
                  null
            }
            <ShoppingCartIcon color={'black'}/>
          </button>

        </>
    );
  }
}

const mapStateFromProps = (state) => ({
  productsAmount: getProductsAmountFromCart(state.cart),
  miniCartVisibility: state.miniCartDisplay,
  cart: state.cart
})

const mapDispatchFromProps = (dispatch) => ({
  onToggleMiniCart: () => dispatch(toggleMiniCart())
})
export default withRouter(connect(mapStateFromProps, mapDispatchFromProps)(ShoppingCartButton))
