import React from "react";
import {connect} from "react-redux";

class MiniAddedProduct extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <>
        </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  // onAddToCart: (id, attributes) => dispatch(changeProductAmount(id, attributes, 1))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniAddedProduct)
