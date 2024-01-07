import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { increaseLikesToDB } from "../features/blogs/BlogsSlice";
import {
  increaseLike2,
  toggleIsSaved,
  toggleIsSavedToDB,
} from "../features/blog/BlogSlice";

export default function BlogDetails({ blog }) {
  const dispatch = useDispatch();
  const { id, image, title, tags, likes, description, isSaved } = blog || {};
  const tagContent = tags?.map((tag, key) => <span key={key}>#{tag} </span>);

  const handleIsSaved = () => {
    dispatch(toggleIsSaved());
    dispatch(toggleIsSavedToDB({ id, isSaved: !isSaved }));
  };

  const handleLikes = () => {
    dispatch(increaseLike2(id));
    dispatch(increaseLikesToDB({ id, likes: likes + 1 }));
  };

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
          <button
            onClick={handleLikes}
            className="like-btn"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            onClick={handleIsSaved}
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
