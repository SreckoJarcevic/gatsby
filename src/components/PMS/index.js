import React from "react"
import { left, right } from "./data"
import ProductPage from "../ProductPageGenerator/productPage"

const pms = () => {
  return (
    <ProductPage
      left={left}
      right={right}
      middle={"slider-monitor.png"}
      title={"ELECTRONIC HEALTH RECORDS"}
    />
  )
}

export default pms
