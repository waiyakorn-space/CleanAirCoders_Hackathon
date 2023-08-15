import React, {useEffect, useRef} from "react"
import {Map, TileLayer} from "react-leaflet"
import Select from "react-select"
import {Column} from "@ant-design/plots"
import {complainData} from "../data/complainData"

import zipUrl from "../shp_countreports.zip"
import ShapeFile from "../components/ShapeFile"
import {options} from "../data/options"

export default function MapPage() {
  const mapRef = useRef()

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
  function convertData(data) {
    const dataArray = []

    for (const key in data[0]) {
      if (data[0].hasOwnProperty(key)) {
        const districtInfo = data[0][key]
        dataArray.push({
          // id: parseInt(key),
          district: districtInfo.district,
          count: districtInfo.count,
        })
      }
    }

    return dataArray
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
        <h1 className="font-medium">คำสำคัญที่ถูกร้องเรียนเข้ามาบ่อย</h1>
        <div className="my-30">
          <Select options={options} />
        </div>
        <Column {...config} />
      </div>
    </>
  )
}
