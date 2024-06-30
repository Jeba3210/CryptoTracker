// import React from 'react'
// import {Line} from 'react-chartjs-2'
// import { Chart as ChartJS} from "chart.js/auto";
// import {formatNumbers} from '../../../functions/formatNumbers';

// function LineChart({multiAxis, priceType , chartData}) {
//     const options = {
// 		plugins: {
// 			legend: {
// 				display: multiAxis ? true : false,
// 			},
// 		},
// 		responsive: true,
// 		interaction: {
// 			mode: 'index',
// 			intersect: false,
// 		},

// 		scales: {
// 			crypto1: {
// 				type: 'linear',
// 				display: true,
// 				position: 'left',
// 				ticks: {
// 					callback: function (value, index, ticks) {
// 						if (priceType == 'prices') return value.toLocaleString();
// 						else {
// 							return '$' + formatNumbers(value);
// 						}
// 					},
// 				},
// 			},
// 			crypto2: multiAxis && {
// 				type: 'linear',
// 				display: true,
// 				position: 'right',
// 				ticks: {
// 					callback: function (value, index, ticks) {
// 						if (priceType == 'prices') return value.toLocaleString();
// 						else {
// 							return '$' + formatNumbers(value);
// 						}
// 					},

// 				},
// 			},
// 		},
// 	};

//  return <Line options={options} data={chartData} />;
// }

// export default LineChart

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ chartData, multiAxis }) {
	const options = {
		plugins: {
			legend: {
				display: multiAxis ? true : false,
			},
		},
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		scales: {
			crypto1: {
				position: 'left',
			},
			crypto2: multiAxis && {
				position: 'right',
			},
		},
	};

	return <Line data={chartData} options={options} />;
}

export default LineChart;
