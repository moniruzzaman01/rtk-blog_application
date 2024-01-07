import PropTypes from "prop-types";

export default function RelatedBlog({ relatedBlog }) {
  const { id, title, tags, createdAt, image } = relatedBlog || {};
  const tagContent = tags?.map((tag, key) => <span key={key}>#{tag} </span>);

  return (
    <div className="card">
      <a href="post.html">
        <img src={image} className="card-image" alt="" />
      </a>
      <div className="p-4">
        <a
          href={`blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </a>
        <div className="mb-0 tags">{tagContent}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

RelatedBlog.propTypes = {
  relatedBlog: PropTypes.object,
};
