import React from "react";
import { connect } from "react-redux";
import { store } from "./../../redux/store";
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart";

import "./cart-icon.styles.scss";

export const CartIconComponent = ({ itemCount }) => (
  <div
    className="cart-icon"
    onClick={() => {
      store.dispatch(toggleCartHidden());
    }}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.length,
});

export const CartIcon = connect(mapStateToProps)(CartIconComponent);

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// (CartIcon);
