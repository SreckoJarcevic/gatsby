import React from "react"
import ProductPage from "../ProductPageGenerator/productPage"
import { left, right } from "./data"

const Ehr = () => {
  return (
    <ProductPage
      left={left}
      right={right}
      middle={"tablet-slider.png"}
      title={"ELECTRONIC HEALTH RECORDS"}
    />
  )
}

export default Ehr
