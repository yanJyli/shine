import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clothesCollection from "../../services/clothes-collection";

export const getCollectionDress = createAsyncThunk(
  "dress/getCollectionDressStatus",
  async () => {
    const response = await clothesCollection.getCollection("dress");

    return response;
  }
);

const dressSlice = createSlice({
  name: "dress",
  initialState: {
    dress: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getCollectionDress.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default dressSlice.reducer;
