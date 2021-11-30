import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./features/basket";
import productsReducer from "./features/products";

export default configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer
  }
});
