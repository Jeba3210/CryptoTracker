import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto";

function LineChart({multiAxis,priceType , chartData}) {
    const options = {
        plugins: {
            legend : {
              display: multiAxis ? true :false,
            },
          },
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
       
};

 return <Line options={options} data={chartData} />;
}

export default LineChart