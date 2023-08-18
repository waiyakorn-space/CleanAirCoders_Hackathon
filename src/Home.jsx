import React, {useState} from "react"

import {NavLink, Outlet} from "react-router-dom"
import "./index.css"
export default function Home() {
  const [checked, setChecked] = useState(false)
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
          to="/landUsed"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          วิเคราะห์การใช้ที่ดิน
        </NavLink>
        <NavLink
          to="/model"
          className={({isActive}) => `${isActive && "text-active"}`}
        >
          โมเดลความสัมพันธ์ฝุ่น
        </NavLink>
      </nav>
      <div className="hamburger">
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span />
          <span />
          <span />
          <ul id="menu">
            <NavLink
              to="/"
              onClick={() => setChecked(false)}
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>หน้าหลัก</li>
            </NavLink>
            <NavLink
              to="/map"
              onClick={() => setChecked(false)}
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li>แผนที่ปัญหาฝุ่นรายเขต</li>
            </NavLink>
            <NavLink
              to="/landUsed"
              onClick={() => setChecked(false)}
              className={({isActive}) => `${isActive && "text-active"}`}
            >
              <li> วิเคราะห์การใช้ที่ดิน</li>
            </NavLink>
            <NavLink
              onClick={() => setChecked(false)}
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
