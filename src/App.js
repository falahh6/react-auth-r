import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Info from "./pages/Info";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
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
          path: "onboarding",
          element: <RegisterUser />,
        },
        {
          path: "login-user",
          element: <Login />,
        },
        {
          path: "info",
          element: <Info />,
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
