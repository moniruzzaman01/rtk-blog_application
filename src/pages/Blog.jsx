import BlogDetails from "../components/BlogDetails";
import RelatedBlogsContainer from "../components/RelatedBlogsContainer";

export default function Blog() {
  return (
    <div>
      <div className="container mt-8">
        <a
          href="index.html"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </a>
      </div>
      <section className="post-page-container">
        <BlogDetails />
        <RelatedBlogsContainer />
      </section>
    </div>
  );
}
