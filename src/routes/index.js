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
    path: "/Courses-Center",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <IndexStudent /> },

      { path: "/Courses-Center", element: <ChoicePage /> },
      // Student Routes
      { path: "/Courses-Center/student", element: <IndexStudent /> },
      { path: "/Courses-Center/student/add", element: <AddStudent /> },
      { path: "/Courses-Center/student/:id/edit", element: <EditStudent /> },
      { path: "/Courses-Center/student/:id/details/edit", element: <EditStudent /> },
      { path: "/Courses-Center/student/:id/details", element: <DetailsPage /> },

      // Teacher Routes
      { path: "/Courses-Center/teacher", element: <IndexTeacher /> },
      { path: "/Courses-Center/teacher/add", element: <AddTeacher /> },
      { path: "/Courses-Center/teacher/:id/edit", element: <EditTeacher /> },
      { path: "/Courses-Center/teacher/:id/details", element: <DetailsTeacher /> },
      { path: "/Courses-Center/teacher/:id/details/edit", element: <EditTeacher /> },
    ],
  },
]);
