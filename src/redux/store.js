import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/authSlice";
import ProfileReducer from "./features/profile/profileSlice";
import ProductReducer from "./features/product/productSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    profile: ProfileReducer,
    products: ProductReducer,
  },
});
