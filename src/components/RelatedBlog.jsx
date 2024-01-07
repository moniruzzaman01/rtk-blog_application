import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RelatedBlog({ relatedBlog }) {
  const { id, title, tags, createdAt, image } = relatedBlog || {};
  const tagContent = tags?.map((tag, key) => <span key={key}>#{tag} </span>);

  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">{tagContent}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

RelatedBlog.propTypes = {
  relatedBlog: PropTypes.object,
};
