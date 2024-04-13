import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from 'reselect';

import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
// import { selectCartItems } from '../../redux/cart/cart.selectors';
import { store } from "../../redux/store";

import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart";

const CartDropdownComponent = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Link className="option" to="/checkout">
      <CustomButton
        onClick={() => {
          store.dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT 
      </CustomButton>
    </Link>
  </div>
);
const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });
const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
export default CartDropdown;

// export const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default (connect(mapStateToProps)(CartDropdown)
// );
