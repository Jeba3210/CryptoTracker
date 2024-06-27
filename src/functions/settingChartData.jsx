import { convertDate } from "./convertDate";

export const settingChartData =(setChartData, coin_prices) =>{
    setChartData({
        labels: coin_prices.map(price => convertDate(price[0])),
        datasets: [
          {
            data: coin_prices.map(price => price[1]),
            borderColor: "#3DBC1D",
            borderWidth : 2,
            fill: true,
            tension: .30,
            pointRadius : 0,
            backgroundColor : 'rgb(61,188,29,0.1)',
          },
        ]
    });
}