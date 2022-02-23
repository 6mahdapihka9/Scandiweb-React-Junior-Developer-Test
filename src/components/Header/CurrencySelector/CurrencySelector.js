import React from "react";
import './CurrencySelector.scss';
import {Link} from "react-router-dom";
import {Query} from "@apollo/client/react/components";
import {GET_CURRENCIES} from "../../../constants/apolloQueries/queries";
import {connect} from "react-redux";
import currency from "../../../redux/reducers/currency.reducer";
import {changeCurrency} from "../../../redux/currency.actions";

class CurrencySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <Query query={GET_CURRENCIES()}>
          {({loading, error, data}) => {
            if (loading)
              return <p>Loading...</p>
            if (error)
              return <p>An Error has occurred! {error.message}</p>

            const {currencies} = data;
            return (
                <select
                    className={'button-pointer'}
                    value={this.props.chosenCurrency.label}
                    onChange={(e) =>
                        this.props.onChangeCurrencyHandler(currencies.filter(c =>
                            c.label === e.target.value
                        )[0])
                    }
                >
                  {
                    currencies.map(c => (
                        <option
                            key={c.label}
                            value={c.label}
                        >
                          {c.symbol + ' ' + c.label}
                        </option>
                    ))
                  }
                </select>

            )
          }}
        </Query>
    );
  }
}

const mapStateToProps = state => ({
  chosenCurrency: state.currency
})
const mapDispatchToProps = dispatch => ({
  onChangeCurrencyHandler: currency => dispatch(changeCurrency(currency))
})
export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)
