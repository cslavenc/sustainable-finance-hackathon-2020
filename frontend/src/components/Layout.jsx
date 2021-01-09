import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
