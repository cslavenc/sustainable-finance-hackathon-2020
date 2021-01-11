import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout>
      <h1>Not Found</h1>
      <p>
        Sorry, there is nothing here! <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
