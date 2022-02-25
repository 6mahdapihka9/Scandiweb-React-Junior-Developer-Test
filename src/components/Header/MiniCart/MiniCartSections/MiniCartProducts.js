import React from "react";
import {connect} from "react-redux";
import {Query} from "@apollo/client/react/components";
import {v4} from "uuid";
import {GET_PRODUCT} from "../../../../constants/apolloQueries/queries";
import AddedProduct from "../../../Body/Cart/AddedProduct";

class MiniCartProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'mini-cart-products-container'}>
        <div className={'mini-cart-products'}>
          {
            this.props.cart.length ?
                this.props.cart.map(prod =>
                    <Query key={v4()} query={GET_PRODUCT()} variables={{id: prod.productID}}>
                      {({loading, error, data}) => {
                        if (loading) return <div className={'loader'}>Loading...</div>

                        if (error) return <div className={'error'}>An Error has occurred! {error.message}</div>

                        const {product} = data;
                        return (
                            <AddedProduct
                                isMiniCart={true}
                                {...prod}
                                product={product}
                            />
                        )
                      }}
                    </Query>
                ) :
                <h3 className={'lighter-title'}>There is no products!</h3>
          }
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(MiniCartProducts)
