import axiosInstance from "../../axios/axiosInstance";

const getBlog = async (id) => {
  const response = await axiosInstance(`/blogs/${id}`);
  return response.data;
};

export default getBlog;
