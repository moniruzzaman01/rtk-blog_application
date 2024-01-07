import { useEffect } from "react";
import SingleBlog from "./SingleBlog";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "../features/blogs/BlogsSlice";

export default function BlogsContainer() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = blogs.map((blog, key) => <SingleBlog key={key} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
