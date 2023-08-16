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
          หน้าหลัก
        </NavLink>
        <NavLink
          to="/map"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          แผนที่ปัญหาฝุ่นรายเขต
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
              <li>หน้าหลัก</li>
            </NavLink>
            <NavLink
              to="/map"
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>แผนที่ปัญหาฝุ่นรายเขต</li>
            </NavLink>
            <NavLink
              to="/model"
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>โมเดลความสัมพันธ์ฝุ่น</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="overflow-y-scroll container">
        <Outlet />
      </div>
    </div>
  )
}
