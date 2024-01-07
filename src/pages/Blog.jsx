import { useSelector, useDispatch } from "react-redux";
import BlogDetails from "../components/BlogDetails";
import RelatedBlogsContainer from "../components/RelatedBlogsContainer";
import { useEffect } from "react";
import { loadBlog } from "../features/blog/BlogSlice";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const { id, tags } = blog || {};

  useEffect(() => {
    dispatch(loadBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = <BlogDetails blog={blog} />;
  }

  return (
    <div>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {content}
        <RelatedBlogsContainer id={id} tags={tags} />
      </section>
    </div>
  );
}
