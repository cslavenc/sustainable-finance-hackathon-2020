import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        There is nothing to see here! Just some placeholder text for the
        hackathon project!
      </p>
      <Link to="/">Go Home</Link>
      <div style={{ paddingBottom: '36px' }} />
    </Layout>
  )
}

export default About
