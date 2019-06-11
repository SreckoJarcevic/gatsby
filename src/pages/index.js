import React from "react"
import Layout from "../components/Layout/layout"
import SlideShow from "../components/SlideShow/slideshow"
import Welcome from "../components/Welcome/welcome"
import Products from "../components/Products/products"
import TheySay from "../components/TheySay/theySay"
import Why from "../components/Why/why"
import Features from "../components/KeyFeatures/keyFeatures"
import Videos from "../components/Videos/videos"
import Certified from "../components/Certified/certified"
import Social from "../components/Social/social"

export default () => (
  <Layout>
    <SlideShow />
    <Welcome />
    <Products />
    <TheySay />
    <Why />
    <Features />
    <Videos />
    <Certified />
    <Social />
  </Layout>
)
