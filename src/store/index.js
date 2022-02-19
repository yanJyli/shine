import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import dressReduser from "./collection/dressSlice";
import suitReduser from "./collection/suitSlice";
import sportReduser from "./collection/sportSlice";
import shirtsReducer from "./collection/shirtsSlice";
import favoritesReducer from "./account/favoritesSlice";
import cartReducer from "./account/cartSlice";
import orderReducer from "./account/orderSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    dress: dressReduser,
    suit: suitReduser,
    sport: sportReduser,
    shirts: shirtsReducer,
    favoritesClothes: favoritesReducer,
    cartClothes: cartReducer,
    orderClothes: orderReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
