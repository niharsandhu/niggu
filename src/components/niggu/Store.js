import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "@/components/niggu/CartSlice";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default Store;