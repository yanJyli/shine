import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clothesCollection from "../../services/clothes-collection";

export const getCollectionShirts = createAsyncThunk(
  "shirts/getCollectionShirtsStatus",
  async () => {
    const response = await clothesCollection.getCollection("shirts");

    return response;
  }
);

const shirtsSlice = createSlice({
  name: "shirts",
  initialState: {
    shirts: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getCollectionShirts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default shirtsSlice.reducer;
