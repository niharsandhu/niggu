import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Initial state
  cartState: false,
  totalAmount: 0,
  totalQTY: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to load cart items from localStorage
    setCartFromLocalStorage(state, action) {
      state.cartItems = action.payload;
    },
    setClearCartItems(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems'); // Clear localStorage on clearing cart
    },
    // Other actions
    setCloseCart(state, action) {
      state.cartState = action.payload.cartState;
    },
    setGetTotals(state) {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQTY += quantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.totalAmount = totalAmount;
      state.totalQTY = totalQTY;
    },
  },
});

export const { setCartFromLocalStorage, setClearCartItems, setCloseCart, setGetTotals } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartState = (state) => state.cart.cartState;
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectTotalQTY = (state) => state.cart.totalQTY;
export default cartSlice.reducer;

