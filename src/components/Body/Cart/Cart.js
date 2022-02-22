import React from "react";
import './Cart.scss';
import {connect} from "react-redux";
import {v4} from 'uuid';
import AddedProduct from "./AddedProduct";
import {GET_PRODUCT} from "../../../constants/apolloQueries/queries";
import {Query} from "@apollo/client/react/components";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <h1 className={'title'}>Cart</h1>
          <div className={'cart-container'}>
            {
              this.props.cart.map(prod =>
                  <Query key={v4()} query={GET_PRODUCT()} variables={{id: prod.productID}}>
                    {({loading, error, data}) => {
                      if (loading) return <div className={'loader'}>Loading...</div>

                      if (error) return <div className={'error'}>An Error has occurred! {error.message}</div>

                      const {product} = data;
                      return <AddedProduct {...prod} product={product}/>
                    }}
                  </Query>
              )
            }
          </div>
        </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})


export default connect(mapStateToProps)(Cart)
