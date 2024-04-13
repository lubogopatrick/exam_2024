import React from 'react';
// import { connect } from 'react-redux';
import { store } from '../../redux/store';
import {
  addItemToCart,
  clearItemFromCart, removeItemFromCart,
} from '../../redux/cart';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => store.dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => store.dispatch(addItemToCart(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() =>  store.dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CheckoutItem);
