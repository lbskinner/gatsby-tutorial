import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="I'd love to talk! Email me at the address below" />
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  )
}
