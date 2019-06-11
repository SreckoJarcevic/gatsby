import React from "react"
import Layout from "../components/Layout/layout"
import Kiosk from "../components/KIOSK/index"
import ProductsNav from "../components/ProductsNav/productsNav"

export default () => {
  return (
    <Layout isGray>
      <ProductsNav />
      <Kiosk />
    </Layout>
  )
}
