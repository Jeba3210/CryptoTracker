import React, { useEffect } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './backToTop.css';

function BackToTop() {
	// let mybutton;

	useEffect(() => {
		window.onscroll = scrollFunction;
		return () => {
			window.onscroll = null;
		};
	}, []);

	function scrollFunction() {
		const backToTopButton = document.getElementById('myBtn');
		if (backToTopButton) {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			) {
				backToTopButton.style.display = 'flex';
			} else {
				backToTopButton.style.display = 'none';
			}
		}
	}

	// Get the button
	// useEffect(() => {
	// 	mybutton = document.getElementById('myBtn');
	// }, []);

	// // When the user scrolls down 20px from the top of the document, show the button
	// window.onscroll = function () {
	// 	scrollFunction();
	// };

	// function scrollFunction() {
	// 	if (
	// 		document.body.scrollTop > 20 ||
	// 		document.documentElement.scrollTop > 20
	// 	) {
	// 		mybutton.style.display = 'flex';
	// 	} else {
	// 		mybutton.style.display = 'none';
	// 	}
	// }

	// // When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<div className='back-to-top' id='myBtn' onClick={() => topFunction()}>
			<ArrowUpwardRoundedIcon style={{ color: '#3DBC1D' }} />
		</div>
	);
}

export default BackToTop;
