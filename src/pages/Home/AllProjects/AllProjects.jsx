import useProjects from "../../../hooks/useProjects";
import Project from "./Project";

const AllProjects = () => {
    const [projects, refetch] = useProjects();
    // console.log(projects);
    return (
        <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {
                projects.map(item=> <Project key={item._id} item={item}></Project>)
            }
        </div>
    );
};

export default AllProjects;