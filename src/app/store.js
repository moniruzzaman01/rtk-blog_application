import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../features/blogs/BlogsSlice";
import BlogReducer from "../features/blog/BlogSlice";

const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
    blog: BlogReducer,
  },
});

export default store;
