import { createSlice } from "@reduxjs/toolkit";

const cartState = {
   showCart: false,
};

const cartSlice = createSlice({
   name: "cart",
   initialState: cartState,
   reducers: {
      toggleCart(state) {
         state.showCart = !state.showCart;
      },
   },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
