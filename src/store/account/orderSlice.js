import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import orderCollection from "../../services/order-collection";

export const getOrderClothes = createAsyncThunk(
  "orderClothes/getOrderClothesStatus",
  async (username) => {
    const response = await orderCollection.getCollectionByUsername(username);
    
    return response;
  }
);

const orderSlice = createSlice({
  name: "orderClothes",
  initialState: {
    data: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getOrderClothes.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default orderSlice.reducer;
