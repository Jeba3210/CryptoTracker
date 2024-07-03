import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
	return (
		<div className='footer_container'>
			<div>
				<h2>
					CryptoShield
					<span>.</span>
				</h2>
			</div>
			<div>
				<Link to={`https://www.facebook.com`}>
					<FacebookIcon />
				</Link>
				<Link to={`mailto:jebaparvin2018@gmail.com`}>
					<EmailIcon />
				</Link>
				<Link to={`https://www.x.com`}>
					<XIcon />
				</Link>
				<Link to={`https://www.instagram.com`}>
					<InstagramIcon />
				</Link>
				<Link to={`https://www.telegram.org`}>
					<TelegramIcon />
				</Link>
			</div>
		</div>
	);
}

export default Footer;
