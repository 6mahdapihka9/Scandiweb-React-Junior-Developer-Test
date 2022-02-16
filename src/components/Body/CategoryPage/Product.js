import React from "react";
import './CategoryPage.scss';
import {connect} from "react-redux";
import {addToCart} from "../../../redux/cart.actions";
import {withRouter} from "../../../hooks/withRouter";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonClick = (product, e) => {
    e.stopPropagation();
    this.props.onAddToCart(product)
  }

  onProductClick = () => {
    this.props.navigate(`/products/${this.props.product.id}`)
  }

  render() {
    return (
        <section onClick={this.onProductClick}>
          <div className={'image-block ' +  (!this.props.product.inStock? 'out-of-stock' : '')}>
            <img
                src={this.props.product.gallery[0]}
                alt={this.props.product.name}
            />
            <div
                className={'out-of-stock-div'}
                style={{display: (!this.props.product.inStock)? "block" : "none"}}
            >
              OUT OF STOCK
            </div>
            <button
                className={'add-to-cart-button'}
                onClick={e => this.onButtonClick(this.props.product, e)}
            >
              Cart
            </button>
          </div>
          <br/>
          <p className={'product-name'}>{this.props.product.name}</p>
          <p className={'product-price'}>
            {
              this.props.currency.symbol + ' ' +
              this.props.product.prices.filter( price => price.currency.label === this.props.currency.label)[0].amount
            }
          </p>
        </section>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
})

const mapDispatchToProps = dispatch => ({
  onAddToCart: (product) => dispatch(addToCart(product))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))
