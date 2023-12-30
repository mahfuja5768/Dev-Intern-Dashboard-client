import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { axiosPublic } from "../../../api";
import { removeProject } from "../../../api/project";

const Project = ({ item, refetch }) => {
  const handleRemove = async (id) => {
    // console.log(id);
    try {
      Swal.fire({
        title: "Do you want to delete this project?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const project = await removeProject(id);
          // console.log(project);
          Swal.fire({
            title: "Success!",
            text: "Project deleted successfully !",
            icon: "success",
            confirmButtonText: "Done",
          });
          refetch();
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <div className="shadow-lg">
      <img
        src={item.download_url}
        className="md:w-[300px] w-[180px] mx-auto mb-4"
        alt=""
      />
      <div className="flex text-primary text-lg justify-evenly items-center my-3 gap-4">
        <Link to={`/details/${item._id}`}>
          <button className="flex   justify-center items-center border-2 border-textBlue p-1">
            <FaEye />
          </button>
        </Link>

        <Link to={`/update/${item._id}`}>
          <button className="flex border-2 border-textBlue p-1  justify-center items-center ">
            <MdEdit />
          </button>
        </Link>

        <button
          onClick={() => handleRemove(item._id)}
          className="flex  border-2 border-textBlue p-1 justify-center items-center "
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Project;
