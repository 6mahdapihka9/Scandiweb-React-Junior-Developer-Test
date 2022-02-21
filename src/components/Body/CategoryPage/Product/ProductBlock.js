import React from "react";
import '../CategoryPage.scss';
import {withRouter} from "../../../../hooks/withRouter";
import ImageBlock from "./ImageBlock";
import InfoBlock from "./InfoBlock";

class ProductBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  onProductClick = () => {
    this.props.navigate(`/products/${this.props.product.id}`)
  }

  render() {
    return (
        <section onClick={this.onProductClick}>
          <ImageBlock {...this.props.product}/>

          <InfoBlock {...this.props.product}/>
        </section>
    );
  }
}

export default withRouter(ProductBlock)
