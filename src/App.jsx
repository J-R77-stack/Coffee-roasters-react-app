import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import Cart from "./features/cart/Cart";
import Plan from "./features/plan/Plan";
import About from "./features/about/About";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart />, errorElement: <Error /> },
      { path: "/plan", element: <Plan />, errorElement: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
