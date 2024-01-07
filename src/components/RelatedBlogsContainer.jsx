import { useDispatch, useSelector } from "react-redux";
import RelatedBlog from "./RelatedBlog";
import { useEffect } from "react";
import { loadRelatedBlogs } from "../features/relatedBlogs/RelatedBlogsSlice";
import PropTypes from "prop-types";

export default function RelatedBlogsContainer({ id, tags }) {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );
  useEffect(() => {
    dispatch(loadRelatedBlogs({ id, tags }));
  }, [dispatch, id, tags]);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = relatedBlogs.map((relatedBlog, key) => (
      <RelatedBlog key={key} relatedBlog={relatedBlog} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}

RelatedBlogsContainer.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.array,
};
