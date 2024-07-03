import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function MultiAxisLineChart({ chartData, multiAxis }) {
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
				type: 'linear',
			},
			crypto2: multiAxis && {
				position: 'right',
				type: 'linear',
			},
		},
	};

	return <Line data={chartData} options={options} />;
}

export default MultiAxisLineChart;
