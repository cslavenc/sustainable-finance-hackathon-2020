import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className={`row ${styles.footer}`}>
      <div className="col-8 text-center">
        <Link to="/About/">About</Link> <br />
        <Link to="/Privacy/">Privacy</Link> <br />
      </div>
      <div className="col-4 text-right">
        Fake element <br />
        Another element <br />
        Last element <br />
      </div>
    </div>
  )
}

export default Footer
