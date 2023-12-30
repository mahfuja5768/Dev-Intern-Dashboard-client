import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../api";

const useProjects = () => {

  
  
  const { refetch, data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      // console.log(res.data);
      return res.data;
    },
  });

  return [projects, refetch];
};

export default useProjects;
