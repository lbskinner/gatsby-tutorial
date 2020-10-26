import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/about/">About</Link>
      <Link to="/about-css-modules/" style={{ marginLeft: "10px" }}>
        About CSS Modules
      </Link>
      <Link to="/contact/" style={{ marginLeft: "10px" }}>
        Contact
      </Link>
      <Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img src="https://source.unsplash.com/random/400x400" alt="" />
    </Layout>
  )
}
