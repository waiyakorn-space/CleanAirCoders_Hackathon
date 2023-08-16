import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Home"
import MapPage from "./pages/MapPage"
import "leaflet/dist/leaflet.css"
import "./index.css"
import AboutPage from "./pages/AboutPage"
import ModelPage from "./pages/ModelPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
    children: [
      {
        path: "/",
        element: <AboutPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/model",
        element: <ModelPage />,
      },
    ],
  },
])

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  rootElement
)
