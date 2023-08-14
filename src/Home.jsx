import React from "react"

import {NavLink, Outlet} from "react-router-dom"
import "./index.css"
export default function Home() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/map"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          Map Page
        </NavLink>
        <NavLink
          to="/model"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          Models
        </NavLink>
      </nav>
      <div className="hamburger">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <NavLink
              to="/"
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/map"
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>Map Page</li>
            </NavLink>
            <NavLink
              to="/model"
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>Models</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
