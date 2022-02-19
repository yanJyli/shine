import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clothesCollection from "../../services/clothes-collection";

export const getCollectionSport = createAsyncThunk(
  "sport/getCollectionSportStatus",
  async () => {
    const response = await clothesCollection.getCollection("sport");

    return response;
  }
);

const sportSlice = createSlice({
  name: "sport",
  initialState: {
    sport: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getCollectionSport.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sportSlice.reducer;
