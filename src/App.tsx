import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Searching from "./pages/Searching";
import NewProduct from "./pages/NewProduct";
import NotFoundError from "./pages/NotFoundError";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/product',
      element: <ProductPage />
    },
    {
      path: '/product/new',
      element: <NewProduct />
    },
    {
      path: "/search",
      element: <Searching />
    },
    {
      path: '*',
      element: <NotFoundError />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;