import React from "react"
import Layout from "../components/Layout/layout"
import Ehr from "../components/EHR/index"
import ProductsNav from "../components/ProductsNav/productsNav"

export default () => {
  return (
    <Layout isGray>
      <ProductsNav />
      <Ehr />
    </Layout>
  )
}
