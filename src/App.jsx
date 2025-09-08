import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import Layout from "./components/layout/Layout"
import { data } from "./data"

function App() {
  const visitedDestinatios =  data.filter(d => d.visited)
  const notVisitedDestinations = data.filter(d => !d.visited)


  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home data={visitedDestinatios} />} />
      <Route path="wishlist" element={<Wishlist data={notVisitedDestinations} />} />
    </Route>
  ))

  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
