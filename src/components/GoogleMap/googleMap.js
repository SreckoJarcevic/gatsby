import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const GoogleMap = props => <Map google={props.google} />

// google api wrapper for lazy loading
export default GoogleApiWrapper({
  apiKey: "AIzaSyDQ44sS9GDMWSoi_N0RBIHGPzMtRPI5WYs",
})(GoogleMap)
