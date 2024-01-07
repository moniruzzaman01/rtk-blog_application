import PropTypes from "prop-types";

export default function SingleBlog({ blog }) {
  const { id, title, createdAt, likes, tags, image, isSaved } = blog || {};
  const tagContent = tags.map((tag, key) => <span key={key}>#{tag} </span>);

  return (
    <div className="lws-card">
      <a href={`blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </a>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <a href={`blog/${id}`} className="lws-postTitle">
          {title}
        </a>
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
