import axiosInstance from "../../axios/axiosInstance";

const getBlogs = async () => {
  const response = await axiosInstance("/blogs");
  return response.data;
};

export default getBlogs;
