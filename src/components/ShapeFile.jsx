import {useEffect} from "react"
import PropTypes from "prop-types"
import {useLeaflet} from "react-leaflet"
import L from "leaflet"
import shp from "shpjs"

function ShapeFile({zipUrl}) {
  const {map} = useLeaflet()

  useEffect(() => {
    // function polyStyle(feature) {
    //   console.log("feature.properties.count", feature.properties.count)
    //   switch (feature.properties.count) {
    //     case feature.properties.count <= 71:
    //       return {
    //         fillColor: "#FEF0D9",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //     case feature.properties.count <= 120:
    //       return {
    //         fillColor: "#FDCC8A",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //     case feature.properties.count <= 177:
    //       return {
    //         fillColor: "#FC8D59",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //     case feature.properties.count <= 265:
    //       return {
    //         fillColor: "#E34A33",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //     case feature.properties.count <= 364:
    //       return {
    //         fillColor: "#B30000",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //     default:
    //       return {
    //         fillColor: "#FEF0D9",
    //         weight: 2,
    //         opacity: 1,
    //         color: "white", //Outline color
    //         fillOpacity: 0.7,
    //       }
    //   }
    // }

    const geo = L.geoJson(
      {features: []},

      // {
      //   style: function (feature) {
      //     console.log("feature.properties.count", feature.properties.count)
      //     switch (feature.properties.count) {
      //       case feature.properties.count <= 71:
      //         return {color: "#FEF0D9"}
      //       case feature.properties.count <= 120:
      //         return {color: "#FDCC8A"}
      //       case feature.properties.count <= 177:
      //         return {color: "#FC8D59"}
      //       case feature.properties.count <= 265:
      //         return {color: "#E34A33"}
      //       case feature.properties.count <= 364:
      //         return {color: "#B30000"}
      //       default:
      //         return {color: "#FEF0D9"}
      //     }
      //   },
      // },
      {
        onEachFeature: function popUp(feature, layer) {
          // layer.bindTooltip(feature.properties.hood)

          var out = []
          if (feature.properties) {
            console.log("feature.properties", feature.properties)
            for (var key in feature.properties) {
              if (
                key === "dcode" ||
                key === "dname_e" ||
                key === "dname" ||
                key === "count"
              )
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
    console.log({zipUrl})
    shp(zipUrl).then(function (data) {
      console.log({data})
      geo.addData(data)
    })
  }, [])

  return null
}

ShapeFile.propTypes = {
  zipUrl: PropTypes.string.isRequired,
}

export default ShapeFile
