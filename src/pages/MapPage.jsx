import React, {useEffect, useRef} from "react"
import {Map, TileLayer} from "react-leaflet"

import "leaflet/dist/leaflet.css"

import zipUrl from "../shp_countreports.zip"
import ShapeFile from "../components/ShapeFile"

export default function MapPage() {
  const mapRef = useRef()

  useEffect(() => {
    const map = mapRef.current.leafletElement
    map.setView([13.75307285684537, 100.50098364542347], 11)
  }, [])

  return (
    <div className="p-0">
      <Map
        center={[13.75307285684537, 100.50098364542347]}
        zoom={13}
        style={{height: "100vh"}}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShapeFile zipUrl={zipUrl} />
      </Map>
    </div>
  )
}
