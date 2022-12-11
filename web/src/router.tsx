import { createBrowserRouter } from "react-router-dom";

import BlogsPage from "./pages/Blogs";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
