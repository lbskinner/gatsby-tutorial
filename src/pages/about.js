import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Header headerText={`About ${data.site.siteMetadata.title}`} />
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// Page queries live outside of the component definition — by convention
// at the end of a page component file — and are only available on page components.
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
