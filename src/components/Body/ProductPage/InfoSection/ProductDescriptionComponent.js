import React from "react";
import '../ProductPage.scss';
import {connect} from "react-redux";
import {changeProductAmount} from "../../../../redux/cart.actions";
import AttributeComponent from "./AttributeComponent";
import {v4} from "uuid";
import getDefaultAttributes from "../../../../helpers/getDefaultAttributes";
import PriceInfo from "./PriceInfo";

class ProductDescriptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenAttributes: getDefaultAttributes(this.props.attributes)
    }
  }

  addToCartHandler = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onAddToCart(id, this.state.chosenAttributes)
  }

  changeAttributeHandler = (id, value, e) => {
    e.stopPropagation();
    e.preventDefault();

    this.setState({
      chosenAttributes: this.state.chosenAttributes.map(
          a => (a.id === id)? {...a, value} : a
      )
    })
  }

  render() {

    return (
        <div className={'product-info'}>
          <h2>{this.props.name}</h2>
          <h2 className={'brand-info'}>{this.props.brand}</h2>

          <div className={'attributes'}>
            {
              this.props.attributes &&
              this.props.attributes.map(a =>
                  <AttributeComponent
                      key={v4()}
                      onChangeAttribute={this.changeAttributeHandler}
                      chosenAttribute={this.state.chosenAttributes.filter(ca => ca.id === a.id)[0]}
                      {...a}
                  />
              )
            }
          </div>

          <PriceInfo prices={this.props.prices}/>

          <button
              className={'add-to-cart'}
              onClick={e => this.addToCartHandler(this.props.id, e)}
              disabled={!this.props.inStock}
          >
            {!this.props.inStock? 'OUT OF STOCK' : 'ADD TO CART'}
          </button>

          <div
              className={'description'}
              dangerouslySetInnerHTML={{__html: this.props.description}}
          />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddToCart: (id, attributes) => dispatch(changeProductAmount(id, attributes, 1))
})

export default connect(null, mapDispatchToProps)(ProductDescriptionComponent);
