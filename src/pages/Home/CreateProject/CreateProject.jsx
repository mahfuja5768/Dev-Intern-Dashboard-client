import img from "../../../assets/images/img-1.png";

const CreateProject = () => {
  return (
    <div className="my-5 bg-white p-5 w-[310px] rounded-lg cursor-pointer">
      <img
        src={img}
        className="bg-[#fa782f66] mx-auto   px-24 py-12 rounded-lg"
        alt=""
      />
      <h3 className="text-lg text-center font-semibold my-2">
        Create a new project
      </h3>
      <h4 className="text-sm text-center font-semibold">
        or try a <span className="text-primary">sample project</span>
      </h4>
    </div>
  );
};

export default CreateProject;
