import axiosInstance from "../../axios/axiosInstance";

export const getBlogs = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};

export const updateLikes = async (id, likes) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, { likes });
  return response.data;
};
