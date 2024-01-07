import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../features/blogs/BlogsSlice";

const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
  },
});

export default store;
