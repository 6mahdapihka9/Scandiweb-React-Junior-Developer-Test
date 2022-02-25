import React from "react";
import PlusIcon from "../../../icons/PlusIcon";
import MinusIcon from "../../../icons/MinusIcon";
import {changeProductsAmountAction,removeProductFromCartAction} from "../../../../redux/cart.actions";
import {connect} from "react-redux";

class ADAmount extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      iconSize: this.props.isMiniCart? '8' : '15'
    }
  }

  render() {
    return (
        <div className={'added-product-amount'}>
          <button className={'button-pointer'} onClick={() => this.props.onChangeAmount(1)}>
            <PlusIcon width={this.state.iconSize} height={this.state.iconSize}/>
          </button>

          <h3>{this.props.amount}</h3>

          <button className={'button-pointer'} onClick={() => this.props.onChangeAmount(-1)}>
            <MinusIcon width={this.state.iconSize} height={this.state.iconSize}/>
          </button>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onChangeAmount: amount => {
    if (props.amount + amount > 0)
      dispatch(changeProductsAmountAction(props.id, amount))
    else
      dispatch(removeProductFromCartAction(props.id))
  }
})

export default connect(null, mapDispatchToProps)(ADAmount)
