import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Layout/LayoutRoot";
import ChoicePage from "../pages/ChoicePage/ChoicePage";
import IndexStudent from "../pages/indexStudent/IndexStudent";
import IndexTeacher from "../pages/IndexTeacher/IndexTeacher";
import AddStudent from "../pages/Student/AddStudent/AddStudent";
import AddTeacher from "../pages/Teacher/AddTeacher/AddTeacher";
import EditStudent from "../pages/Student/EditStudent/EditStudent";
import EditTeacher from "../pages/Teacher/EditTeacher/EditTeacher";
import DetailsPage from "../pages/Student/Details/DetailsPage";
import DetailsTeacher from "../pages/Teacher/DetailsTeacher/DetailsTeacher";
import ErrorPage from "../pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <IndexStudent /> },

      { path: "/", element: <ChoicePage /> },
      // Student Routes
      { path: "student", element: <IndexStudent /> },
      { path: "student/add", element: <AddStudent /> },
      { path: "student/:id/edit", element: <EditStudent /> },
      { path: "student/:id/details", element: <DetailsPage /> },
      { path: "student/:id/details/edit", element: <EditStudent /> },

      // Teacher Routes
      { path: "teacher", element: <IndexTeacher /> },
      { path: "teacher/add", element: <AddTeacher /> },
      { path: "teacher/:id/edit", element: <EditTeacher /> },
      { path: "teacher/:id/details", element: <DetailsTeacher /> },
      { path: "teacher/:id/details/edit", element: <EditTeacher /> },
    ],
  },
]);
