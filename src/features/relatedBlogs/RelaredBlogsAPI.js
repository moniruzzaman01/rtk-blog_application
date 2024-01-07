import axiosInstance from "../../axios/axiosInstance";

const getRelatedBlogs = async ({ id, tags }) => {
  let query = "?";
  if (tags.length) {
    query += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (id) {
    query += `&id_ne=${id}`;
  }
  console.log(`/blogs${query}`);
  const response = await axiosInstance(`/blogs${query}`);
  return response.data;
};

export default getRelatedBlogs;
