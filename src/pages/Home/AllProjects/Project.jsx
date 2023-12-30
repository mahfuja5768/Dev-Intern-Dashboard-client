import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const Project = ({item}) => {
    const {url,author,download_url,_id} = item;
    const [detail, setDetail] = useState([]);


    const handleDetail = async (id) => {
        const getTask = await taskDetails(id);
        console.log(getTask);
        setDetail(getTask[0]);
      };

    const handleRemove = async (id) => {
        console.log(id);
        try {
          const review = await removeTask(id);
          // console.log(review);
          Swal.fire({
            title: "Success!",
            text: "Task deleted successfully !",
            icon: "success",
            confirmButtonText: "Done",
          });
          refetch();
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
        <div>
            <img src={download_url} alt="" />
            <div className="flex text-primary text-lg justify-evenly items-center my-3 gap-4">
          <Link onClick={() => handleDetail(task?._id)}>
            <button
              className="flex   justify-center items-center border-2 border-textBlue p-1"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <FaEye />
            </button>
          </Link>

          <Link to={`/updateTask/${_id}`}>
            <button className="flex border-2 border-textBlue p-1  justify-center items-center ">
              <MdEdit />
            </button>
          </Link>

          <button
            onClick={() => handleRemove(task._id)}
            className="flex  border-2 border-textBlue p-1 justify-center items-center "
          >
            <MdDelete />
          </button>
        </div>
           {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-2xl font-bold text-center my-3 border-b-2 pb-4">Task Details</h2>
          <h3 className="font-bold text-lg text-black">Name: {name}</h3>
          
        </div>
      </dialog>
      </div>
      
    );
};

export default Project;