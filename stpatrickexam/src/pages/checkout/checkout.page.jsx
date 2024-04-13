import React from "react";
import { connect } from "react-redux";
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { PriceCheckout } from "../../components/stripe-button/stripe-button.component";
// import { CustomButton } from "../../components/custom-button/custom-button.component";
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// import {
//   selectCartItems,
//   selectCartTotal
// } from '../../redux/cart/cart.selectors';

import "./checkout.styles.scss";

const CheckoutPageComponent = ({ cartItems , total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total()}</div>
    <PriceCheckout />
    {/* <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div> */}
    {/* <CustomButton /> */}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  total () {
    const sumofcart = state.cart.cartItems.reduce(
      (accumQuantity, cartItem) =>
        accumQuantity + cartItem.quantity * cartItem.price,
      0
    );
    if (sumofcart === 0) {
      return <p>cart is empty</p>;
    } else {
      return sumofcart;
    }
  },
});

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent);
