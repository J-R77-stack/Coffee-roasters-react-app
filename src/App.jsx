import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import About from "./features/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
