import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Home"
import MapPage from "./pages/MapPage"

import "./index.css"
import "leaflet/dist/leaflet.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        index: true,
        element: <MapPage />,
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
