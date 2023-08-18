import {useEffect} from "react"
import {useLeaflet} from "react-leaflet"
import L from "leaflet"
import shp from "shpjs"

import zip2017 from "../2017.zip"
import zip2018 from "../2018.zip"
import zip2019 from "../2019.zip"
import zip2020 from "../2020.zip"
import zip2021 from "../2021.zip"
import zip2022 from "../2022.zip"
function ShapeLandUsed() {
  const {map} = useLeaflet()

  useEffect(() => {
    const geo2017 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2017).then(function (data) {
      geo2017.addData(data)
    })

    const geo2018 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2018).then(function (data) {
      geo2018.addData(data)
    })

    const geo2019 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2019).then(function (data) {
      geo2019.addData(data)
    })

    const geo2020 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2020).then(function (data) {
      geo2020.addData(data)
    })

    const geo2021 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2021).then(function (data) {
      geo2021.addData(data)
    })

    const geo2022 = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            for (let key in feature.properties) {
              if (key === "type" || key === "area")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.type === "ต้นไม้") {
              layer.setStyle({
                fillColor: "#267300",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "น้ำ") {
              layer.setStyle({
                fillColor: "#00A9E6",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พืชพรรณ/พืชการเกษตร") {
              layer.setStyle({
                fillColor: "#FFAA00",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "พื้นที่โล่ง") {
              layer.setStyle({
                fillColor: "#D7C29E",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.type === "สิ่งก่อสร้าง") {
              layer.setStyle({
                fillColor: "#E60000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            }
          }
        },
      }
    ).addTo(map)

    shp(zip2022).then(function (data) {
      geo2022.addData(data)
    })

    const categories = [
      {color: "#267300", label: "ต้นไม้"},
      {color: "#00A9E6", label: "น้ำ"},
      {color: "#FFAA00", label: "พืชพรรณ/พืชการเกษตร"},
      {color: "#D7C29E", label: "พื้นที่โล่ง"},
      {color: "#E60000", label: "สิ่งก่อสร้าง"},
    ]

    let legend = L.control({position: "bottomleft"})
    legend.onAdd = function (map) {
      let div = L.DomUtil.create("div", "info legend mb-60")
      let labels = ["<strong>ประเภท</strong>"]
      categories.map((cat) => {
        return labels.push(
          `<i style=background:${cat.color} class="circle" ></i>` +
            ` ${cat.label}`
        )
      })

      div.innerHTML = labels.join("<br>")
      return div
    }
    legend.addTo(map)

    let layerControl = {
      2022: geo2022,
      2021: geo2021,
      2020: geo2020,
      2019: geo2019,
      2018: geo2018,
      2017: geo2017,
    }
    L.control.layers(layerControl).addTo(map)
    map.removeLayer(geo2017)
    map.removeLayer(geo2018)
    map.removeLayer(geo2019)
    map.removeLayer(geo2020)
    map.removeLayer(geo2021)
    map.addLayer(geo2022)
  }, [map])

  return null
}

export default ShapeLandUsed
