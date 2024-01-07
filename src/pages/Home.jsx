import SideBar from "../components/SideBar";
import BlogsContainer from "../components/BlogsContainer";

export default function Home() {
  return (
    <section className="wrapper">
      <SideBar />
      <BlogsContainer />
    </section>
  );
}
