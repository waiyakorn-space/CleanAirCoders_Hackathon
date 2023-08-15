import React, {useEffect, useRef, useState} from "react"
import {Map, TileLayer} from "react-leaflet"
import Select from "react-select"
import {Column, Bar} from "@ant-design/plots"
import {complainData} from "../data/complainData"

import zipUrl from "../shp_countreports.zip"
import ShapeFile from "../components/ShapeFile"
import {options} from "../data/options"
import {topWordData} from "../data/topWordData"

export default function MapPage() {
  const mapRef = useRef()
  const [checked, setChecked] = useState("1")
  const [selected, setSelected] = useState("ภาพรวมกรุงเทพมหานคร")
  useEffect(() => {
    const map = mapRef.current.leafletElement
    map.setView([13.75307285684537, 100.50098364542347], 11)
  }, [])

  const config = {
    data: complainData,
    xField: "district",
    yField: "count",
    xAxis: {
      label: {autoHide: false, autoRotate: true},
    },
    scrollbar: {
      type: "horizontal",
    },
    meta: {
      district: {
        alias: "district",
      },
      count: {
        alias: "จำนวนคำร้อง",
      },
    },
  }
  const configTopWord = {
    data: topWordData[selected][checked],
    xField: "count",
    yField: "word",
    xAxis: {
      label: {autoHide: false, autoRotate: true},
    },
    scrollbar: {
      type: "vertical",
    },
    meta: {
      word: {
        alias: "word",
      },
      count: {
        alias: "จำนวนคำร้อง",
      },
    },
  }

  return (
    <>
      <Map
        center={[13.75307285684537, 100.50098364542347]}
        zoom={13}
        style={{height: "calc(50%)", zIndex: "0"}}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShapeFile zipUrl={zipUrl} />
      </Map>
      <div className="chart-container">
        <h1 className="font-medium">จำนวนคำร้องในแต่ละเขต</h1>
        <Column {...config} />
      </div>
      <div className="chart-container mt-30">
        <h1 className="font-medium mt-60">คำสำคัญที่ถูกร้องเรียนเข้ามาบ่อย</h1>
        <div className="flex flex-row flex-wrap gap-10 items-center">
          <div className="w-50">
            <Select
              options={options}
              onChange={(value) => {
                setSelected(value.value)
              }}
            />
          </div>
          <div className="flex flex-row gap-10">
            <div>
              <input
                type="radio"
                id="1"
                onClick={() => setChecked("1")}
                checked={checked === "1"}
              />
              <label htmlFor="1">1 คำ</label>
            </div>
            <div>
              <input
                type="radio"
                id="2"
                onClick={() => setChecked("2")}
                checked={checked === "2"}
              />
              <label htmlFor="2">2 คำ</label>
            </div>
          </div>
        </div>
        <p>{selected}</p>
        <Bar {...configTopWord} className="mt-30 pb-60" />
      </div>
    </>
  )
}
