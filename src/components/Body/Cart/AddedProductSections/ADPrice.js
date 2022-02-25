import React from "react";
import {connect} from "react-redux";

class ADPrice extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h3>
          {
            this.props.currency.symbol + ' ' +
            (this.props.prices.filter(
                    price => price.currency.label === this.props.currency.label)[0].amount * this.props.amount
            ).toFixed(2)
          }
        </h3>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency
})
export default connect(mapStateToProps)(ADPrice)
