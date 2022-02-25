import React from "react";
import {connect} from "react-redux";
import './MiniCart.scss';
import getProductsAmountFromCart from "../../../helpers/getProductsAmountFromCart";
import {hideMiniCartAction} from "../../../redux/minicart.actions";
import MiniCartTitle from "./MiniCartSections/MiniCartTitle";
import MiniCartProducts from "./MiniCartSections/MiniCartProducts";
import MiniCartTotal from "./MiniCartSections/MiniCartTotal";
import MiniCartButtons from "./MiniCartSections/MiniCartButtons";

class MiniCart extends React.Component{
  constructor(props) {
    super(props);
    this.miniCartRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickDuringMiniCartOpened, {capture: true})
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickDuringMiniCartOpened, {capture: true})
  }

  handleClickDuringMiniCartOpened = e => {
    if (!this.miniCartRef.current.contains(e.target)) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      this.props.hideMiniCart();
    }
  }

  render() {
    return (
        <div ref={this.miniCartRef} className={'mini-cart-container'}>
          <MiniCartTitle productsAmount={this.props.productsAmount}/>

          <MiniCartProducts />

          <MiniCartTotal />

          <MiniCartButtons />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  productsAmount: getProductsAmountFromCart(state.cart)
})

const mapDispatchToProps = dispatch => ({
  hideMiniCart: () => dispatch(hideMiniCartAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)
