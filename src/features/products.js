import { createSlice } from "@reduxjs/toolkit";

const ProductItems = [...new Array(10)].map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.round(Math.random() * 100)
}));

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: ProductItems
  }
});

export default productsSlice.reducer;
