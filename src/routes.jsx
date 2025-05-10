import App from "./App";
import Home from "./Home";
import Shop from "./Components/Shop/Shop.jsx";
import Cart from "./Components/Cart/Cart.jsx"
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
