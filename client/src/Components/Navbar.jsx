import React from 'react'
import styles from "./styles/nav.module.css"
import logo from "../assets/logo/nexus.png"
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
        <img src={logo} alt='logo'/>
        <div className={styles.buttonContainer}>
            <button id={styles.login}>Login</button>
            <button id={styles.signup}>Signup</button>
        </div>
    </div>
  )
}

export default Navbar