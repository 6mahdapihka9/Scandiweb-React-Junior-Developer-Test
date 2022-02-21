import React from "react";
import './ProductPage.scss';
import ImagesSection from "./ImagesSection/ImagesSection";
import ProductDescriptionComponent from "./InfoSection/ProductDescriptionComponent";

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <ImagesSection gallery={this.props.product.gallery}/>
          <ProductDescriptionComponent {...this.props.product}/>
        </>
    );
  }
}

export default ProductComponent
