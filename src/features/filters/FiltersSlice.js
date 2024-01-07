import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  isSaved: false,
};

const FiltersSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    sorted: (state, action) => {
      state.sort = action.payload;
    },
    saved: (state, action) => {
      state.isSaved = action.payload;
    },
  },
});

export default FiltersSlice.reducer;
export const { sorted, saved } = FiltersSlice.actions;
