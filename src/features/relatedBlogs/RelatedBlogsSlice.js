import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedBlogs from "./RelaredBlogsAPI";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadRelatedBlogs = createAsyncThunk(
  "relatedBlogs/loadBlogs",
  async (query) => {
    const relatedBlogs = await getRelatedBlogs(query);
    return relatedBlogs;
  }
);

const RelatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadRelatedBlogs.pending, (state) => {
        state.relatedBlogs = [];
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadRelatedBlogs.fulfilled, (state, action) => {
        state.relatedBlogs = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadRelatedBlogs.rejected, (state, action) => {
        state.relatedBlogs = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default RelatedBlogsSlice.reducer;
