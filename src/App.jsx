import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import Cart from "./features/cart/Cart";
import Plan from "./features/plan/Plan";
import About from "./features/about/About";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
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
      { path: "/cart", element: <Cart /> },
      { path: "/plan", element: <Plan /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
