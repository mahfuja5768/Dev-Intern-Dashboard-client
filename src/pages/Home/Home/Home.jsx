import useProjects from "../../../hooks/useProjects";
import AllProjects from "../AllProjects/AllProjects";
import CreateProject from "../CreateProject/CreateProject";

const Home = () => {
    const [projects, refetch] = useProjects();

    return (
        <div className="container px-4">
            <h1 className="text-4xl font-semibold">My Projects</h1>
            <CreateProject refetch={refetch}></CreateProject>
            <AllProjects projects={projects} refetch={refetch}></AllProjects>
        </div>
    );
};

export default Home;