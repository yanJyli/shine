import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import cartCollection from "../../services/cart-collection";

export const getCartClothes = createAsyncThunk(
  "cartClothes/getCartClothesStatus",
  async (username) => {
    const response = await cartCollection.getCollectionByUsername(username);
    
    return response;
  }
);

const cartSlice = createSlice({
  name: "cartClothes",
  initialState: {
    data: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getCartClothes.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default cartSlice.reducer;
