import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SingleBlog({ blog }) {
  const { id, title, createdAt, likes, tags, image, isSaved } = blog || {};
  const tagContent = tags.map((tag, key) => <span key={key}>#{tag} </span>);

  return (
    <div className="lws-card">
      <Link to={`blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">{tagContent}</div>
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
}

SingleBlog.propTypes = {
  blog: PropTypes.object,
};
