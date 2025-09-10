import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Page from "./components/Page"
import { data } from "./data"

function App() {
  const visitedDestinatios =  data.filter(d => d.visited)
  const notVisitedDestinations = data.filter(d => !d.visited)


  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Page data={visitedDestinatios} title="My travels so far:" />} />
      <Route path="wishlist" element={<Page data={notVisitedDestinations} title="My wishlist:" />} />
    </Route>
  ))

  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
