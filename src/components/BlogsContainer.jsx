import { useEffect } from "react";
import SingleBlog from "./SingleBlog";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "../features/blogs/BlogsSlice";

export default function BlogsContainer() {
  const dispatch = useDispatch();
  // const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  return (
    <main className="post-container" id="lws-postContainer">
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </main>
  );
}
