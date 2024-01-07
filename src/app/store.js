import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../features/blogs/BlogsSlice";
import BlogReducer from "../features/blog/BlogSlice";
import RelatedBlogReducer from "../features/relatedBlogs/RelatedBlogsSlice";
import FiltersReducer from "../features/filters/FiltersSlice";

const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
    blog: BlogReducer,
    relatedBlogs: RelatedBlogReducer,
    filters: FiltersReducer,
  },
});

export default store;
