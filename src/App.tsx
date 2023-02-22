import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductResearch from "./pages/ProductResearch";
import ProductEditor from "./pages/ProductEditor";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./contexts/AuthContext";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product/:productId", element: <Product /> },
  { path: "/product/new", element: <ProductEditor /> },
  { path: "/product/my", element: <ProductResearch /> },
  { path: "/product/edit/:productId", element: <ProductEditor /> },
  { path: "/search/:title/:categoryParam?", element: <ProductResearch /> },
  { path: "*", element: <NotFound /> }
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
