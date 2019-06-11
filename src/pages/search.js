import React from "react"
import Layout from "../components/Layout/layout"
import SearchPage from "../components/SearchPage/searchPage"

const Search = props => {
  return (
    <Layout>
      <SearchPage
        data={props.location.state.groupedResult}
        value={props.location.state.value}
      />
    </Layout>
  )
}

export default Search
