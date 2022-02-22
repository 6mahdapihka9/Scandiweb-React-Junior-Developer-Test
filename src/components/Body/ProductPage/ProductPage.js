import React from "react";
import './ProductPage.scss';
import {Query} from "@apollo/client/react/components";
import {GET_PRODUCT} from "../../../constants/apolloQueries/queries";
import {withRouter} from "../../../hooks/withRouter";
import ProductComponent from "./ProductComponent";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'container'}>
          <Query query={GET_PRODUCT()} variables={{id: this.props.params.productID}}>
            {({loading, error, data}) => {
              if (loading) return <div className={'loader'}>Loading...</div>

              if (error) return <div className={'error'}>An Error has occurred! {error.message}</div>

              const {product} = data;
              return <ProductComponent product={product}/>
            }}
          </Query>
        </div>
    );
  }
}

export default withRouter(ProductPage)
