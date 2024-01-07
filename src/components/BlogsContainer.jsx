import { useEffect } from "react";
import SingleBlog from "./SingleBlog";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "../features/blogs/BlogsSlice";
import { applySort, savedOrNot } from "../utils/Functions";

export default function BlogsContainer() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sort, isSaved } = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = applySort(blogs, sort)
      .filter(savedOrNot(isSaved))
      .map((blog, key) => <SingleBlog key={key} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
