import React from "react";
import './Product.scss';
import {connect} from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className={'product product-container'}>
          <img className={'product-image'} src={this.props.product.gallery[0]} alt={this.props.product.name} />
          <p className={'product-name'}>{this.props.product.name}</p>
          <p className={'product-price'}>
            {
              this.props.currency.symbol + ' ' +
              this.props.product.prices.filter( price => price.currency.label === this.props.currency.label)[0].amount
            }
          </p>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  currency: state.currency
})

export default connect(mapStateToProps)(Product)
