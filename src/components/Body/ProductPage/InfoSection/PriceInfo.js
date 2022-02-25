import React from "react";
import '../ProductPage.scss';
import {connect} from "react-redux";

class PriceInfo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'price'}>
          <h3>Price</h3>
          <p>
            {
              this.props.currency.symbol + ' ' +
              this.props.prices.filter(price => price.currency.label === this.props.currency.label)[0].amount
            }
          </p>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency
})

export default connect(mapStateToProps)(PriceInfo)
