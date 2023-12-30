import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { imageUpload } from "../api/utils";
import { postAProject } from "../api/project";
import { useNavigate } from "react-router-dom";
import { axiosPublic } from "../api";

const UpdateProject = () => {
  const itemData = useLoaderData();
  const item = itemData[0];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const project_name = data.project_name;
    const author = data.author;
    const image = data.image[0];
    const imageData = await imageUpload(image);
    const projectImg = imageData?.data?.display_url;

    const newProject = {
      project_name,
      author,
      download_url: projectImg,
    };
    console.log(item._id);
    const updateTask = await axiosPublic.patch(
      `/update-project/${item._id}`,
      newProject
    );

    // console.log(newProject);

    Swal.fire({
      title: "Success!",
      text: "Successfully project updated!",
      icon: "success",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-semibold">Update your project</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            defaultValue={item.project_name}
            type="text"
            {...register("project_name", { required: true })}
            placeholder="Type here"
            className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
          />
          {errors.project_name?.type === "required" && (
            <p role="alert" className="text-red-500">
              project name is required
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input
            defaultValue={item.author}
            type="text"
            {...register("author", { required: true })}
            placeholder="Type here"
            className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
          />
          {errors.author?.type === "required" && (
            <p role="alert" className="text-red-500">
              author name is required
            </p>
          )}
        </div>

        <div className="form-control my-3">
          <label className="label">
            <span className="label-text">Choose Photo </span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full file-input rounded-2xl"
          />
          {errors.image?.type === "required" && (
            <p role="alert" className="text-red-500">
              Image is required
            </p>
          )}
        </div>

        <div className="form-control mt-6 flex justify-between">
          <input
            htmlFor="confirmation-modal"
            className="btn  text-white bg-primary hover:bg-gray-400 hover:text-black hover:border-transparent"
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProject;
