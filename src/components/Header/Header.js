import React from "react";
import './Header.scss';
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import {NavBar} from "./NavBar/NavBar";
import CurrencySelector from "./CurrencySelector/CurrencySelector";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all'
    }
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
        </header>
    );
  }
}
