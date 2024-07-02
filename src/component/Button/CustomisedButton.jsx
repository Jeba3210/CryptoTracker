import React from 'react';
import './customisedButton.css';

function CustomisedButton({ text, outlined }) {
	return (
		<div>
			<button className={outlined ? 'outline_btn' : 'noOutline_button'}>
				{text}
			</button>
		</div>
	);
}

export default CustomisedButton;
