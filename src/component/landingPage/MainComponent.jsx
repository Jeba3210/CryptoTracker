import React from 'react';
import './mainComponent.css';
import CustomisedButton from '../Button/CustomisedButton';
import phone from './phone.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MainComponent() {
	return (
		<div className='main_container'>
			<div>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='heading1'
				>
					Track Crypto
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='heading2'
				>
					Real Time.
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.75 }}
					className='para'
				>
					Track crypto through a public api in real time. Visit the
					dashboard to do so!
				</motion.p>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 1 }}
					className='btn_div'
				>
					<Link to={`/dashboard`}>
						<CustomisedButton text={'Dashboard'} />
					</Link>
					<CustomisedButton text={'Share'} outlined={true} />
				</motion.div>
			</div>
			<div className='phone_container'>
				<div>
					<motion.img
						initial={{ y: -10 }}
						animate={{ y: 10 }}
						transition={{
							duration: 1.75,
							type: 'smooth',
							repeatType: 'mirror',
							repeat: Infinity,
						}}
						className='phone'
						src={phone}
						alt=''
					/>
				</div>
				<div className='gradient'></div>
			</div>
		</div>
	);
}

export default MainComponent;
