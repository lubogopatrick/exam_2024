import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentUser: null,
    hidden: true,
    cartItems: [],
  },

  reducers: {
    // addItemToCart(state,action){
    //     state.cartItems=[...state.cartItems,{...action.payload}];
    // },
    toggleCartHidden(state) {
      state.hidden = !state.hidden;
    },
    addItemToCart(state, action) {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (index > -1) {
        state.cartItems[index].quantity += 1;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload }];
      }
    },
    removeItemFromCart(state, action) {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (index > -1) {
        if (state.cartItems[index].quantity === 1) {
          state.cartItems.splice(index, 1);
        } else {
          state.cartItems[index].quantity -= 1;
        }
      }
    },
    clearItemFromCart(state, action) {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (index > -1) {
        state.cartItems.splice(index, 1);
      }
    },

    // addItemToCart (cartItems, cartItemToAdd) {
    //     const existingCartItem = cartItems.filter(
    //       cartItem => cartItem.id === cartItemToAdd.id
    //     );

    //     if (existingCartItem) {
    //       return cartItems.map(ctItem =>
    //         cartItem.id === cartItemToAdd.id
    //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //           : cartItem
    //       );
    //     }

    //     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    //   },

    //  removeItemFromCart (cartItems, cartItemToRemove) {
    //     const existingCartItem = cartItems.find(
    //       cartItem => cartItem.id === cartItemToRemove.id
    //     );

    //     if (existingCartItem.quantity === 1) {
    //       return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    //     }

    //     return cartItems.map(cartItem =>
    //       cartItem.id === cartItemToRemove.id
    //         ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //         : cartItem
    //     );
    //   }
  },
});

export const {
  addItemToCart,
  toggleCartHidden,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
