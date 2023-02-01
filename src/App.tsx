import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Searching from "./pages/Searching";
import PostProduct from "./pages/PostProduct";

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
      element: <PostProduct />
    },
    {
      path: "/search",
      element: <Searching />
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;