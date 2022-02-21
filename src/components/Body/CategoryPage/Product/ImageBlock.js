import React from "react";
import {changeProductAmount} from "../../../../redux/cart.actions";
import {connect} from "react-redux";
import getDefaultAttributes from "../../../../helpers/getDefaultAttributes";

class ImageBlock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chosenAttributes: getDefaultAttributes(this.props.attributes)
    }
  }

  render() {
    return (
        <div className={'image-block ' + (!this.props.inStock ? 'out-of-stock' : '')}>
          <img
              src={this.props.gallery[0]}
              alt={this.props.name}
          />

          <div
              className={'out-of-stock-div'}
              style={{display: (!this.props.inStock) ? "block" : "none"}}
          >
            OUT OF STOCK
          </div>

          {/* todo add attribute changer */}

          <button
              className={'add-to-cart-button'}
              onClick={e => this.props.onAddToCart(this.props.id, this.state.chosenAttributes, e)}
          >
            Cart
          </button>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddToCart: (id, attributes, e) => {
    e.stopPropagation();
    dispatch(changeProductAmount(id, attributes, 1))
  }
})

export default connect(null, mapDispatchToProps)(ImageBlock)
