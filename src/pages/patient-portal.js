import React from "react"
import Layout from "../components/Layout/layout"
import Portal from "../components/PORTAL/index"
import ProductsNav from "../components/ProductsNav/productsNav"

export default () => {
  return (
    <Layout isGray>
      <ProductsNav />
      <Portal />
    </Layout>
  )
}
