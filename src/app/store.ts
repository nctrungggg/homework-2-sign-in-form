import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/redux/AuthSlice";

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
