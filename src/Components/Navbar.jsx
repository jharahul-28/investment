import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>MEMBERSHIP</li>
      <li>INVESTMENT OPTIONS</li>
      <li>PORTFOLIO MANAGEMENT</li>
      <li>CURRENCY EXCHANGE</li>
      <li>CONTACT US</li>
    </ul>
  )
}

export default Navbar;