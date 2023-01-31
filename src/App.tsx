import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Searching from "./pages/Searching";

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
      path: "/search",
      element: <Searching />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;