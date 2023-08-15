import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {useLeaflet} from "react-leaflet"
import L from "leaflet"
import shp from "shpjs"

function ShapeFile({zipUrl}) {
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
        labels.push(
          `<i style=background:${cat.color} class="circle" ></i>` +
            ` ${cat.label}`
        )
      })

      div.innerHTML = labels.join("<br>")
      return div
    }
    legend.addTo(map)
  }, [])

  return null
}

ShapeFile.propTypes = {
  zipUrl: PropTypes.string.isRequired,
}

export default ShapeFile
