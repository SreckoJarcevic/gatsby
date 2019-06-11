import React from "react"
import Layout from "../components/Layout/layout"
import Pms from "../components/PMS/index"
import ProductsNav from "../components/ProductsNav/productsNav"

export default () => {
  return (
    <Layout isGray>
      <ProductsNav />
      <Pms />
    </Layout>
  )
}
