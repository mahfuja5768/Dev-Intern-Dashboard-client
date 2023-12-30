import { Link, useLoaderData } from "react-router-dom";
import Project from "./Home/AllProjects/Project";

const ProjectDetails = () => {
  const item = useLoaderData();
//   console.log(item);
  return (
    <div className="container mx-auto text-center">
      <img
        src={item[0].download_url}
        className="md:w-[300px] w-[180px] mx-auto mb-4"
        alt=""
      />
      <h3 className="font-bold text-2xl my-4">
        Project Name: {item[0].project_name}
      </h3>
      <h3 className="font-bold text-2xl">Author Name: {item[0].author}</h3>
      <Link to="/">
        <button className="btn bg-primary text-white my-4">
          Go to Projects
        </button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
