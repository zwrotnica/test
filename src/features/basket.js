import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: []
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.value.lastIndexOf(action.payload);
      state.value = state.value
        .slice(0, index)
        .concat(state.value.slice(index + 1, state.value.length));
    },
    clearBasket: (state) => {
      state.value = [];
    }
  }
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
