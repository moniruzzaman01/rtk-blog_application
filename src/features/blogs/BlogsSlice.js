import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./BlogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadBlogs = createAsyncThunk("blogs/loadBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const BlogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadBlogs.pending, (state) => {
        state.blogs = [];
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(loadBlogs.rejected, (state, action) => {
        state.blogs = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default BlogsSlice.reducer;
