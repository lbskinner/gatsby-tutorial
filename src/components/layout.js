import React from "react"
import {Link} from "gatsby"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to="/">Home</Link>
      <h3>MySweetSite</h3>
      {children}
    </div>
  )
}
