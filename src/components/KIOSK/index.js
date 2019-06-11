import React from "react"
import { left, right } from "./data"
import ProductPage from "../ProductPageGenerator/productPage"

const kiosk = () => {
  return (
    <ProductPage
      left={left}
      right={right}
      middle={"tablet-slider-landscape.png"}
      title={"ELECTRONIC HEALTH RECORDS"}
    />
  )
}

export default kiosk
