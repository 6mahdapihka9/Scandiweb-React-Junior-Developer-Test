import React from "react";
import {connect} from "react-redux";

class InfoBlock extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <br/>
          <p className={'product-name'}>{this.props.name}</p>
          <p className={'product-price'}>
            {
              this.props.currency.symbol + ' ' +
              this.props.prices.filter(price => price.currency.label === this.props.currency.label)[0].amount
            }
          </p>
        </>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency
})

export default connect(mapStateToProps)(InfoBlock)
