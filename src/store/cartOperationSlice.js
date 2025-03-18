import { createSlice } from "@reduxjs/toolkit";

const cartOperationState = {
   items: [],
   totalQuantity: 0,
   totalAmount: 0,
};

const cartOperationSlice = createSlice({
   name: "cartOperation",
   initialState: cartOperationState,
   reducers: {
      addItemToCart(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find(
            (item) => item.id === newItem.id
         );
         if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
         } else {
            state.items.push({
               id: newItem.id,
               price: newItem.price,
               quantity: 1,
               totalPrice: newItem.price,
               title: newItem.title,
            });
         }
         state.totalQuantity++;
         state.totalAmount += newItem.price;
      },
      removeItemFromCart(state, action) {
         const id = action.payload;
         const existingItem = state.items.find((item) => item.id === id);
         if (existingItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
         } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
         }
         state.totalQuantity--;
         state.totalAmount -= existingItem.price;
      },
      clearCart(state) {
         state.items = [];
         state.totalQuantity = 0;
         state.totalAmount = 0;
      },
   },
});

export const cartOperationActions = cartOperationSlice.actions;

export default cartOperationSlice.reducer;
