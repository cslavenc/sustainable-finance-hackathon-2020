import React from "react"

import Header from "./header"
import "./layout.css"

import Navigation from "./navigation"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation/>
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
