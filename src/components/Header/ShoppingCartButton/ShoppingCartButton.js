import React from "react";
import './ShoppingCartButton.scss';
// import Logo from '../../../assets/shopping-cart-10925.svg';
// import Icon from "./ShoppingCartIcon";
import {connect} from "react-redux";

class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className={'cart-button'} onClick={()=> console.log(this.props.cart)}>
          Cart
          {
            //todo add onclick handler to show cart's info
            this.props.productsAmount?
                <div className={'products-amount'}>
                  {this.props.productsAmount}
                </div> :
                null
          }


          {/*<img src={Logo} alt={'shopping cart button'}/>*/}
          {/*<svg href={'../../../assets/shopping-cart-10925.svg'}/>*/}
          {/*<Icon color={'blue'} size={40}/>*/}

        </div>
    );
  }

}

const mapStateFromProps = (state) => ({
  productsAmount: state.cart.length,
  cart: state.cart
})

export default connect(mapStateFromProps)(ShoppingCartButton)
