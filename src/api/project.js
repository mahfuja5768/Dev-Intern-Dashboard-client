import { axiosPublic } from ".";

export const postAProject = async (project) => {
    // console.log(review)
    const { data } = await axiosPublic.post("/projects", project);
    return data;
  };

  export const getDetails = async (id) => {
    // console.log(user)
  const { data } = await axiosPublic.get(`/projects/${id}`);
  return data;
};

export const removeProject = async (id) => {
    // console.log(review)
    const { data } = await axiosPublic.delete(`/projects/${id}`);
    return data;
  };