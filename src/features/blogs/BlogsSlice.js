import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs, updateLikes } from "./BlogsAPI";

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
export const increaseLikesToDB = createAsyncThunk(
  "blogs/increaseLikes",
  async ({ id, likes }) => {
    const response = await updateLikes(id, likes);
    return response;
  }
);

const BlogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    increaseLike: (state, action) => {
      state.blogs.map((blog) => {
        if (blog.id == action.payload) {
          blog.likes += 1;
        }
      });
    },
  },
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
    builder
      .addCase(increaseLikesToDB.pending, () => {
        console.log("pending");
      })
      .addCase(increaseLikesToDB.fulfilled, () => {
        console.log("fulfilled");
      })
      .addCase(increaseLikesToDB.rejected, () => {
        console.log("rejected");
      });
  },
});

export default BlogsSlice.reducer;
export const { increaseLike } = BlogsSlice.actions;
