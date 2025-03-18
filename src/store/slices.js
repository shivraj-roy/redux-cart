import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartOperationReducer from "./cartOperationSlice";

const store = configureStore({
   reducer: { cart: cartReducer, cartOperation: cartOperationReducer },
});

export default store;
