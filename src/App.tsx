import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Searching from "./pages/Searching";
import NewProduct from "./pages/NewProduct";
import NotFoundError from "./pages/NotFoundError";
import { AuthContextProvider } from "./contexts/AuthContext";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product/:productId", element: <ProductPage /> },
  { path: "/product/new", element: <NewProduct /> },
  { path: "/product/my", element: <Searching /> },
  { path: "/product/edit/:productId", element: <NewProduct /> },
  { path: "/search/:title/:categoryParam?", element: <Searching /> },
  { path: "*", element: <NotFoundError /> }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}

export default App;
