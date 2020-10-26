import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="About me" />
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  )
}
