import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, Switch, alpha, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { green } from '@mui/material/colors';
import { toast } from 'react-toastify';

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

export default function AnchorTemporaryDrawer() {
	const [open, setOpen] = useState(false);
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
		<div>
			<IconButton onClick={() => setOpen(true)}>
				<MenuRoundedIcon className='menu' />
			</IconButton>
			<Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
				<div className='drawer_div'>
					<GreenSwitch
						{...label}
						checked={darkMode}
						onClick={() => changeMode()}
					/>
					<Link to={`/`} className='link'>
						<p>Home</p>
					</Link>
					<Link to={`/compare`} className='link'>
						<p>Compare</p>
					</Link>
					<Link className='link' to={`dashboard`}>
						<p>Dashboard</p>
					</Link>
				</div>
			</Drawer>
		</div>
	);
}
