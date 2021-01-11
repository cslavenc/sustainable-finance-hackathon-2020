import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Privacy = () => {
  return (
    <Layout>
      <h1>Privacy</h1>
      <p>
        There is nothing to see here! Just some placeholder text for the
        hackathon project!
      </p>
      <Link to="/">Go Home</Link>
      <div style={{ paddingBottom: '36px' }} />
    </Layout>
  )
}

export default Privacy
