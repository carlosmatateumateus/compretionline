import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/product',
      element: <ProductPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;