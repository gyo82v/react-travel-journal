import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import Layout from "./components/layout/Layout"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="wishlist" element={<Wishlist />} />
    </Route>
  ))

  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
