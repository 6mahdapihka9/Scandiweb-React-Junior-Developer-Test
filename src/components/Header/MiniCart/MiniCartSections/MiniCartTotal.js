import React from "react";
import {connect} from 'react-redux';
import cartTotalPrice from "../../../../helpers/cartTotalPrice";

class MiniCartTotalText extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.bigFontSize)
      return (<h2>{this.props.children}</h2>)
    return (<h3>{this.props.children}</h3>)
  }
}

class MiniCartTotal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'mini-cart-total'}>
          <MiniCartTotalText bigFontSize={this.props.bigFontSize}>Total</MiniCartTotalText>
          <MiniCartTotalText bigFontSize={this.props.bigFontSize}>
            {
              this.props.currency.symbol +
              cartTotalPrice(this.props.cart, this.props.currency).toFixed(2)
            }
          </MiniCartTotalText>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  currency: state.currency,
  cart: state.cart
})

export default connect(mapStateToProps)(MiniCartTotal)
