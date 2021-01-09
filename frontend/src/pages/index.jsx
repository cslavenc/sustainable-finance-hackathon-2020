import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
//import '../styles/global.scss' // import global styles for some HTML tags
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navigation from '../components/navigation' // enable dropdown menu (JS-related BS functionalities)

export default () => {
  return (
    <>
      <Header />
      <Layout>
        <Navigation />
        <main>add content here</main>
        <Footer />
      </Layout>
    </>
  )
}
