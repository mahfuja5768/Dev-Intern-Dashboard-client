import AllProjects from "../AllProjects/AllProjects";
import CreateProject from "../CreateProject/CreateProject";

const Home = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold">My Projects</h1>
            <CreateProject></CreateProject>
            <AllProjects></AllProjects>
        </div>
    );
};

export default Home;