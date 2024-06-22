import React from 'react'
import CustomisedSwitch from './CustomisedSwitch'
import AnchorTemporaryDrawer from './Drawer'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
      <motion.h2
     initial={{opacity: 0, rotateY: "360deg"}}
     animate={{opacity: 1, rotateY: "0deg"}}
       transition={{ ease: "easeOut", duration: 1 }}
      >CryptoShield <span style={{color:"var(--green)"}}>.</span></motion.h2>
      <div className='links'>
        <CustomisedSwitch />
          <a href="/" className='link'><p>Home</p></a>        
          <a href="/" className='link'><p>Compare</p></a>
          <Link to={`/dashboard`} className='link dashboard'><button className='btn'><p>Dashboard</p></button></Link>
      </div>
      <div className='drawer'>
        <AnchorTemporaryDrawer />
      </div>
       
    </div>
  )
}

export default Header