import React, {Fragment} from "react"
import {Bar} from "@ant-design/plots"
import {factorData} from "../data/factorData"

export default function ModelPage() {
  const config = {
    data: factorData,
    xField: "significance",
    yField: "factor",
    xAxis: {
      label: {autoHide: false, autoRotate: true},
    },
    scrollbar: {
      type: "vertical",
    },
    meta: {
      factor: {
        alias: "ปัจจัย",
      },
      significance: {
        alias: "ค่านัยสำคัญ",
      },
    },
  }
  return (
    <>
      <div className="model-container">
        <div className="flex flex-col gap-10">
          <div className="px-60 flex flex-col">
            <h1 className="font-medium text-header">
              ค่าความสัมพันธ์ของ PM 2.5 กับปัจจัยต่างๆ
            </h1>
            <Bar {...config} className="h-full" />
          </div>
          <div className="h-table">
            <table id="customers">
              <thead>
                <tr>
                  <th className="table-bordered">ปัจจัย</th>
                  <th className="table-bordered">ค่านัยสำคัญ</th>
                </tr>
              </thead>
              <tbody>
                {factorData.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td className="table-bordered">{item.factor}</td>
                      <td className="table-bordered">{item.significance}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-60">
          <h1 className="font-medium text-header">วิธีการ</h1>
          <ul className="gap-10 flex flex-col text-base">
            <li>
              หาข้อมูลปัจจัยที่มีส่วนเกี่ยวข้องกับการทำให้เกิดฝุ่น PM 2.5 ได้แก่
              NO2, O3, CO, SO3, ความชื้นสัมพัทธ์, ความดันบรรยากาศ, ปริมาณน้ำฝน,
              อุณหภูมิ, ทิศทางและความเร็วของลม
              และจุดไฟในบริเวณกรุงเทพและจังหวัดข้างเคียง
            </li>
            <li>
              นำปัจจัยข้างต้นมาทำFeature Engineer
              เพื่อสร้างตัวแปรของปัจจัยที่สมเหตุสมผลมากยิ่งขึ้น โดยใช้Python
              เป็นเครื่องมือในการประมวลผล
            </li>
            <li>
              เขียนคำสั่งเพื่อเทรนโมเดลโดยใช้ชุดคำสั่ง(Library)ของLazyPredict
              เพื่อช่วยหาโมเดลRegressionที่มีความผิดพลาดน้อยที่สุด
              ซึ่งได้ผลลัพท์ออกมาคือ HistGradientBoostingRegressor
            </li>
            <li>
              นำโมเดลที่ได้ มาวิเคราะห์หาค่าความสัมพันธ์(Correlation)
              ระหว่างฝุ่น PM 2.5 และ ปัจจัยต่างๆ
              เพื่อนำผลลัพท์ไปใช้เป็นแนวทางในการวางแผนลดค่า PM 2.5
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
