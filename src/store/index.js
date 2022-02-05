import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";

export default configureStore({
  reducer: { user: userReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
