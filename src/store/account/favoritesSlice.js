import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import favoritesCollection from "../../services/favorites-collection";

export const getFavoritesClothes = createAsyncThunk(
  "favoritesClothes/getFavoritesClothesStatus",
  async (username) => {
    const response = await favoritesCollection.getCollectionByUsername(username);
    
    return response;
  }
);

const favoritesSlice = createSlice({
  name: "favoritesClothes",
  initialState: {
    data: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getFavoritesClothes.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default favoritesSlice.reducer;
