import React from "react";
import './Header.scss';
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import NavBar from "./NavBar/NavBar";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import MiniCart from "./MiniCart/MiniCart";
import {connect} from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          <div className={'section right-section'}>
            <NavBar/>
          </div>
          <div className={'section left-section'}>
            <CurrencySelector/>
            <ShoppingCartButton/>
          </div>
          {
            this.props.isMiniCartVisible? <MiniCart /> : null
          }
        </header>
    );
  }
}

const mapStateToProps = state => ({
  isMiniCartVisible: state.miniCartDisplay
})

export default connect(mapStateToProps)(Header)
