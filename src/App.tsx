import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { Layout } from "./Layout";
import { Contact } from "./views/Contact";
import { Drawingpage } from "./views/DrawingPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      //   {
      //     path: "HomePage",
      //     element: <HomePage />,
      //   },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "DrawingPage",
          element: <Drawingpage />,
        },
   
        {
          path: "*",
          element: (
            <h1 className="text-center text-2xl text-red-600">
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;