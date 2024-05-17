import { HomePage } from "./pages/home.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { UserPage } from "./pages/user.page";
import { LoginPage } from "./pages/login.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div className="mx-auto w-[80vw]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
