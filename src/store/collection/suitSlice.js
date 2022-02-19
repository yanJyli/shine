import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clothesCollection from "../../services/clothes-collection";

export const getCollectionSuit = createAsyncThunk(
  "suit/getCollectionSuitStatus",
  async () => {
    const response = await clothesCollection.getCollection("suit");

    return response;
  }
);

const suitSlice = createSlice({
  name: "suit",
  initialState: {
    suit: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getCollectionSuit.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default suitSlice.reducer;
