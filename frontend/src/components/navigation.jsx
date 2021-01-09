import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Navigation = () => {
  const logoData = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, name: { eq: "logo" } }
      ) {
        nodes {
          relativePath
          image: childImageSharp {
            fluid {
              srcSet
              originalName
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <Img
          fluid={logoData.allFile.nodes[0].image.fluid}
          alt={`Navigation Logo of a brain cell`}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              Dropdown 0
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/synapses/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              Dropdown 1
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                Go Home
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
