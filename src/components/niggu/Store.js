// store.js (your Redux store configuration)
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/components/niggu/CartSlice'; // adjust the import as needed

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your reducers here
  },
});

export default store;
