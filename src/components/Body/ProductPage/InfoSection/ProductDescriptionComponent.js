import React from "react";
import '../ProductPage.scss';
import {connect} from "react-redux";
import {addProductToCartAction} from "../../../../redux/cart.actions";
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

  changeAttributeHandler = (id, value, e) => {
    e.preventDefault();
    this.setState({
      chosenAttributes: {
        ...this.state.chosenAttributes,
        [id]: value
      }
    });
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
                      chosenAttributeValue={this.state.chosenAttributes[a.id]}
                      {...a}
                  />
              )
            }
          </div>

          <PriceInfo prices={this.props.prices}/>

          <button
              className={'add-to-cart button-pointer'}
              onClick={e => this.props.onAddToCart(this.props.id, this.state.chosenAttributes, this.props.prices, e)}
              disabled={!this.props.inStock}
          >
            {this.props.inStock? 'ADD TO CART' : 'OUT OF STOCK'}
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
  onAddToCart: (productID, attributes, prices, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProductToCartAction(productID, attributes, prices))
  }
})

export default connect(null, mapDispatchToProps)(ProductDescriptionComponent);
