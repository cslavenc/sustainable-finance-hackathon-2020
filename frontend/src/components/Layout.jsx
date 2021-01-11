import React from 'react'
import Footer from './Footer'
import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
