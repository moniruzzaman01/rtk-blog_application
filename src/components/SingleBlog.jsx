import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseLike, increaseLikesToDB } from "../features/blogs/BlogsSlice";

export default function SingleBlog({ blog }) {
  const dispatch = useDispatch();
  const { id, title, createdAt, likes, tags, image, isSaved } = blog || {};
  const tagContent = tags.map((tag, key) => <span key={key}>#{tag} </span>);

  const handleLikes = () => {
    dispatch(increaseLike(id));
    dispatch(increaseLikesToDB({ id, likes: likes + 1 }));
  };

  return (
    <div className="lws-card">
      <Link to={`blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p onClick={handleLikes} className="lws-likeCount">
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
