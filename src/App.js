import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Info from "./pages/Info";
import Root from "./pages/Root";
import ParamCheck from "./pages/ParamCheck";
import Profile from "./pages/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/info",
          element: <Info />,
        },
        {
          path: "/:eID",
          element: <ParamCheck />,
        },
        {
          path: "users",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
