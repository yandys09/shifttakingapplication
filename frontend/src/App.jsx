import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Myshift from "./pages/Myshifts/Myshfits";
import Shift from "./pages/Shift/Shift";
import Report from "./pages/Report/Report";
import Staff from "./pages/Staff/Staff";
import Account from "./pages/Account/Account";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ResetPassword />,
    },
    {
      path: "/myshifts",
      element: <Myshift />,
    },
    {
      path: "/shift/:id",
      element: <Shift />,
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/myaccount",
      element: <Account />,
    },
    {
      path: "/reset/KsJhRzLbWgVn4fE2aZpXqYcDxuIo0mKsJhRzLbWgVn4fE2a",
      element: <UpdatePassword />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
