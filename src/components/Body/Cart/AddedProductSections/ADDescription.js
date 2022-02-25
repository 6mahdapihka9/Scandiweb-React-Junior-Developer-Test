import React from "react";
import ADPrice from "./ADPrice";
import ADAttributeList from "./ADAttributeList";
import {withRouter} from "../../../../hooks/withRouter";

class ADDescription extends React.Component{
  constructor(props) {
    super(props);
  }

  onProductClick = () => {
    this.props.navigate(`/products/${this.props.product.id}`)
  }

  render() {
    return (
        <div className={'added-product-description'}>
          <h2 className={'active-title button-pointer'} onClick={this.onProductClick}>{this.props.product.name}</h2>
          <h2 className={'lighter-title'}>{this.props.product.brand}</h2>

          <ADPrice
              prices={this.props.product.prices}
              amount={this.props.amount}
          />

          <ADAttributeList
              attributes={this.props.attributes}
              id={this.props.id}
              product={this.props.product}
          />
        </div>
    )
  }
}

export default withRouter(ADDescription)
