import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Movie from "./Pages/Movie";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import AppLayout from "./componants/Header/AppLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
