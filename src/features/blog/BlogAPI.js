import axiosInstance from "../../axios/axiosInstance";

const getBlog = async (id) => {
  const response = await axiosInstance(`/blogs/${id}`);
  return response.data;
};

export const updateIsSaved = async (id, isSaved) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, { isSaved });
  return response.data;
};

export default getBlog;
