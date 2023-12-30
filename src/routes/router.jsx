import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home/Home/Home";
import CreateNewProject from "../pages/CreateNewProject";
import ProjectDetails from "../pages/ProjectDetails";
import { getDetails } from "../api/project";
import UpdateProject from "../pages/UpdateProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createProject",
        element: <CreateNewProject></CreateNewProject>
      },
      {
        path: "/details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => getDetails(params.id),
      },
      {
        path: "/update/:id",
        element: <UpdateProject></UpdateProject>,
        loader: ({ params }) => getDetails(params.id),
      },
    ],
  },
]);
