import React from 'react'
import CustomisedSwitch from './CustomisedSwitch'
import AnchorTemporaryDrawer from './Drawer'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import CustomisedButton from '../../Button/CustomisedButton'

function Header() {

	
  return (
		<div className='navbar'>
			<motion.h2
				initial={{ opacity: 0, rotateY: '360deg' }}
				animate={{ opacity: 1, rotateY: '0deg' }}
				transition={{ ease: 'easeOut', duration: 1 }}
			>
				CryptoShield <span style={{ color: 'var(--green)' }}>.</span>
			</motion.h2>
			<div className='links'>
				<CustomisedSwitch />
				<NavLink to={'/'} className='link'>Home</NavLink>
			
				<NavLink to={`/compare`} className='link'>
					Compare
				</NavLink>
				<NavLink to={`/dashboard`}>
					<CustomisedButton text={'Dashboard'} />
				</NavLink>
			</div>
			<div className='drawer'>
				<AnchorTemporaryDrawer />
			</div>
		</div>
  );
}

export default Header