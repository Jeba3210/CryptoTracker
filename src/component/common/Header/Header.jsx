import React, { useEffect, useState } from 'react';
import CustomisedSwitch from './CustomisedSwitch';
import AnchorTemporaryDrawer from './Drawer';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import CustomisedButton from '../../Button/CustomisedButton';
import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const GreenSwitch = styled(Switch)(({ theme }) => ({
	'& .MuiSwitch-switchBase.Mui-checked': {
		color: green[500],
		'&:hover': {
			backgroundColor: alpha(
				green[500],
				theme.palette.action.hoverOpacity
			),
		},
	},
	'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: green[500],
	},
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

function Header() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') == 'dark' ? true : false
	);

	useEffect(() => {
		if (localStorage.getItem('theme') == 'dark') {
			setDark();
		} else {
			setLight();
		}
	}, []);

	const changeMode = () => {
		if (localStorage.getItem('theme') != 'dark') {
			setDark();
		} else {
			setLight();
		}
		setDarkMode(!darkMode);
		toast.success('Theme Changed!');
	};

	const setDark = () => {
		localStorage.setItem('theme', 'dark');
		document.documentElement.setAttribute('data-theme', 'dark');
	};

	const setLight = () => {
		localStorage.setItem('theme', 'light');
		document.documentElement.setAttribute('data-theme', 'light');
	};

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
				{/* <Switch checked={darkMode} onClick={() => changeMode()} /> */}
				<GreenSwitch
					{...label}
					checked={darkMode}
					onClick={() => changeMode()}
				/>
				<NavLink to={'/'} className='link'>
					Home
				</NavLink>

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

export default Header;
