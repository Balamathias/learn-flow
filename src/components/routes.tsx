import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SignIn from "../pages/sign-in";
import Root from "./root";
import Dashboard from "../pages/dashboard";
import AuthRoot from "./auth-root";
import SignUp from "../pages/sign-up";
import LandingPage from "../pages/landing-page";
import CourseBuilder from "../pages/course-builder";
import AllCourses from "../pages/all-courses";
import CourseDetail from "../pages/course-detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/auth",
        element: <AuthRoot />,
        children: [
          {
            path: 'sign-in',
            element: <SignIn />
          },
          {
            path: 'sign-up',
            element: <SignUp />
          },
        ]
    },
    {
        path: "/dashboard",
        element: <Root />,
        errorElement: <></>,
        children: [
          {
            path: '',
            element: <Dashboard />,
            loader: async () => ({name: 'Mathias'}),
          },
          {
            path: 'course-builder',
            element: <CourseBuilder />,
          },
          {
            path: 'all-courses',
            element: <AllCourses />,
          },
          {
            path: 'all-courses/:courseId',
            element: <CourseDetail />,
          },
        ],
    },
]);
  
const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes