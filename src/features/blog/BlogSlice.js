import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./BlogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const loadBlog = createAsyncThunk("blog/loadBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadBlog.pending, (state) => {
        state.blog = {};
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadBlog.rejected, (state, action) => {
        state.blog = {};
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default BlogSlice.reducer;
