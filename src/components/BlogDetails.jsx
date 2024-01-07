import PropTypes from "prop-types";

export default function BlogDetails({ blog }) {
  const { image, title, tags, likes, description, isSaved } = blog || {};
  const tagContent = tags?.map((tag, key) => <span key={key}>#{tag} </span>);

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tagContent}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            className={`${isSaved ? "active" : ""} save-btn`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}

BlogDetails.propTypes = {
  blog: PropTypes.object,
};
