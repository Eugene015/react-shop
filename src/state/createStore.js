import cartSlice from "./index";
import userReducer from "./user";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
