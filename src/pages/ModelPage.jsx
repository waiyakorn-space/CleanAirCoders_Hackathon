import React from "react"

import {Column} from "@ant-design/plots"
import {complainData} from "../data/complainData"
export default function ModelPage() {
  const config = {
    data: complainData,
    xField: "district",
    yField: "count",
    xAxis: {
      label: {autoHide: false, autoRotate: true},
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
    <div>
      <Column {...config} />
    </div>
  )
}
