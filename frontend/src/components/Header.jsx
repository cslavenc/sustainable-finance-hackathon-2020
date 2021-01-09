import React from 'react'
import styles from './Header.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  // get image via graphql
  const heroImage = useStaticQuery(graphql`
    {
      allFile {
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
    <header>
      <Img
        alt="hero image"
        fluid={heroImage.allFile.nodes[0].image.fluid}
        className={styles.heroImage}
      />
    </header>
  )
}

export default Header
