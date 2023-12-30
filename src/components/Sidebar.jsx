import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";
import user from "../assets/images/user.png";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="bg-[#fff]  text-gray-700 flex justify-between px-5">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img src={logo} className="w-28" alt="" />
          </div>
        </div>
        <hr />
        <div className="md:flex items-center gap-5 hidden">
          <h4>Jon Doe</h4>
          <img className="w-12 h-12 my-3" src={user} alt="" />
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200 md:hidden"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#fff] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out `}
      >
        <div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-full flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                {" "}
                <img src={logo} alt="" />
              </Link>{" "}
            </div>
          </div>
          <div className="divider"></div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-gray-700 ${
                  isActive ? "text-primary" : "text-gray-700"
                }`
              }
            >
              {" "}
              <img src={icon1} alt="" />
              <span className="mx-4  font-semibold">My Projects</span>
            </NavLink>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                  isActive ? "text-gray-400" : "text-primary"
                }`
              }
            >
              {" "}
              <img src={icon2} alt="" />
              <span className="mx-4  font-semibold">Sample Projects</span>
            </NavLink>
            <div className="divider"></div>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                  isActive ? "text-gray-400" : "text-primary"
                }`
              }
            >
              {" "}
              <img src={icon3} alt="" />
              <span className="mx-4  font-semibold">Apps</span>
            </NavLink>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                  isActive ? "text-gray-400" : "text-primary"
                }`
              }
            >
              {" "}
              <img src={icon4} alt="" />
              <span className="mx-4  font-semibold">Intro to Necleo</span>
            </NavLink>
          </div>
        </div>

        <div>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                isActive ? "text-gray-400" : "text-primary"
              }`
            }
          >
            {" "}
            <img src={icon5} alt="" />
            <span className="mx-4  font-semibold">Help & Support</span>
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                isActive ? "text-gray-400" : "text-primary"
              }`
            }
          >
            {" "}
            <img src={icon6} alt="" />
            <span className="mx-4  font-semibold">Feedback</span>
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-primary ${
                isActive ? "text-gray-900" : "text-primary"
              }`
            }
          >
            {" "}
            <img src={icon7} alt="" />
            <span className="mx-4  font-semibold">Collapse</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
