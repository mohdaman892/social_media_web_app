import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/user-profile",
      element: <Profile />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
