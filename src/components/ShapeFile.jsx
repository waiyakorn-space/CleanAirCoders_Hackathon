import {useEffect} from "react"
import {useLeaflet} from "react-leaflet"
import L from "leaflet"
import shp from "shpjs"

import zipUrl from "../shp_countreports.zip"
import zipUrl2 from "../shp_heat.zip"
function ShapeFile() {
  const {map} = useLeaflet()

  useEffect(() => {
    const geo = L.geoJson(
      {features: []},
      {
        onEachFeature: function popUp(feature, layer) {
          let out = []
          if (feature.properties) {
            // console.log("feature.properties", feature.properties)
            for (let key in feature.properties) {
              if (key === "dcode" || key === "dname_e" || key === "count")
                out.push(key + ": " + feature.properties[key])
            }
            layer.bindPopup(out.join("<br />"))
            if (feature.properties.count <= 71) {
              layer.setStyle({
                fillColor: "#FEF0D9",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.count <= 120) {
              layer.setStyle({
                fillColor: "#FDCC8A",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.count <= 177) {
              layer.setStyle({
                fillColor: "#FC8D59",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.count <= 265) {
              layer.setStyle({
                fillColor: "#E34A33",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else if (feature.properties.count <= 364) {
              layer.setStyle({
                fillColor: "#B30000",
                weight: 2,
                opacity: 1,
                color: "white",
                fillOpacity: 0.8,
              })
            } else {
              layer.setStyle({
                fillColor: "#30030",
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

    // console.log({zipUrl})
    shp(zipUrl).then(function (data) {
      // console.log({data})
      geo.addData(data)
    })

    map.createPane("pane250").style.zIndex = 250
    map.createPane("pane0").style.zIndex = 0

    const geojsonMarkerOptions = {
      radius: 7,
      fillColor: "yellow",
      color: "#c8c7c7",
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.8,
      pane: "pane250",
    }
    const geo2 = L.geoJson(
      {features: []},
      {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions)
        },
        onEachFeature: function (feature, layer) {
          if (feature.properties.brightness) {
            layer.bindPopup(
              `<p>brightness: ${feature.properties.brightness}</p>`
            )
          } else {
            layer.setStyle({pane: "pane0", fillOpacity: 0})
          }
        },
        // style: function (feature) {
        //   console.log({feature})
        //   return {}
        // },
      }
    ).addTo(map)
    shp(zipUrl2).then(function (data) {
      console.log({data})
      geo2.addData(data)
    })

    const categories = [
      {color: "#FEF0D9", label: "<= 71"},
      {color: "#FDCC8A", label: "<= 120"},
      {color: "#FC8D59", label: "<= 177"},
      {color: "#E34A33", label: "<= 265"},
      {color: "#B30000", label: "<= 364"},
    ]

    let legend = L.control({position: "bottomleft"})
    legend.onAdd = function (map) {
      let div = L.DomUtil.create("div", "info legend")
      let labels = ["<strong>Count</strong>"]
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
      จำนวนคำร้องตามเขต: geo,
      จุดความร้อน: geo2,
    }
    L.control.layers(null, layerControl).addTo(map)
  }, [map, zipUrl])

  return null
}

// ShapeFile.propTypes = {
//   zipUrl: PropTypes.string.isRequired,
// }

export default ShapeFile
