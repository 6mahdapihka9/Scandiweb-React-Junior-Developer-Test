import React from "react";
import icon from "../../../assets/shopping-cart-10925.svg";
import './ShoppingCartButton.scss';

const Icon = ({ color= 'black', size }) => (
    <svg className={`icon icon-shopping-cart`} fill={color} width={size} height={size}>
      <use xlinkHref={`${icon}#icon-shopping-cart`} />
    </svg>
);

export default Icon;
