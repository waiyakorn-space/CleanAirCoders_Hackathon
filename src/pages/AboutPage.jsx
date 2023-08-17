import React from "react"

export default function AboutPage() {
  return (
    <>
      <div className="cover-mobile">
        <img
          src="/vertical_1.png"
          alt="vertical_1"
          className="object-fit-cover"
        />
        <img
          src="/vertical_2.png"
          alt="vertical_2"
          className="object-fit-cover"
        />
      </div>
      <div className="cover-desktop">
        <img
          src="/horizontal_1.png"
          alt="horizontal_1"
          className="object-fit-cover"
        />
        <img
          src="/horizontal_2.png"
          alt="horizontal_2"
          className="object-fit-cover p-60"
        />
      </div>
    </>
  )
}
