import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto";
import {FormatNumbers} from '../../../functions/FormatNumbers';

function LineChart({multiAxis, priceType , chartData}) {
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
				type: 'linear',
				display: true,
				position: 'left',
				ticks: {
					callback: function (value, index, ticks) {
						if (priceType == 'prices') return value.toLocaleString();
						else {
							return '$' + FormatNumbers(value);
						}
					},
				},
			},
			crypto2: multiAxis && {
				type: 'linear',
				display: true,
				position: 'right',
				ticks: {
					callback: function (value, index, ticks) {
						if (priceType == 'prices') return value.toLocaleString();
						else {
							return '$' + FormatNumbers(value);
						}
					},

				},
			},
		},
	};

 return <Line options={options} data={chartData} />;
}

export default LineChart