import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/common/Header/Header';
import Loader from '../component/common/Loader/Loader';
import { coinObject } from '../functions/coinObject';
import CoinInfo from '../component/Coin/CoinInfo/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../component/Coin/LineChart/LineChart';
import SelectDays from '../component/Coin/SelectDays/SelectDays';
import TogglePriceType from '../component/Coin/PriceType/TogglePriceType';
import { SettingChartData } from '../functions/SettingChartData';
import ListComponent from '../component/dashboard/List/ListComponent';
import Footer from '../component/common/Footer/Footer';

function Coin() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [coinData, setCoinData] = useState({});
	const [days, setDays] = useState(30);
	const [error, setError] = useState(false);
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [],
	});
	const [priceType, setPriceType] = useState('prices');

	useEffect(() => {
		if (id) {
			getData();
			console.log(chartData);
		}
	}, [id]);

	async function getData() {
		setIsLoading(true);
		const coin_data = await getCoinData(id);
		console.log(coin_data);
		coinObject(setCoinData, coin_data);
		if (coin_data) {
			console.log(coin_data);
			const coin_prices = await getCoinPrices(id, days, priceType);
			if (coin_prices) {
				console.log('Prices Consoled');
				console.log(coinData);
				SettingChartData(setChartData, coin_prices);

				setIsLoading(false);
			}
		}
	}

	const handleDaysChange = async (event) => {
		setIsLoading(true);
		setDays(event.target.value);
		const coin_prices = await getCoinPrices(
			id,
			event.target.value,
			priceType
		);
		if (coin_prices) {
			console.log('Prices Consoled');
			SettingChartData(setChartData, coin_prices);
			setIsLoading(false);
		}
	};

	const handlePriceTypeChange = async (event, newPriceType) => {
		setPriceType(newPriceType);
		console.log(newPriceType);
		const coin_prices = await getCoinPrices(id, days, newPriceType);
		if (coin_prices) {
			console.log('Prices Consoled');
			SettingChartData(setChartData, coin_prices);
			setIsLoading(false);
		}
	};

	return (
		<>
			<Header />

			{!error && !isLoading && coinData.id ? (
				<>
					<div className='list-wrapper'>
						<ListComponent coin={coinData} />
					</div>
					<div className='chart-wrapper'>
						<SelectDays
							days={days}
							handleDaysChange={handleDaysChange}
						/>
						<TogglePriceType
							priceType={priceType}
							handlePriceTypeChange={handlePriceTypeChange}
						/>
						{chartData && <LineChart chartData={chartData} />}
					</div>
					<CoinInfo desc={coinData?.desc} name={coinData?.name} />
					<Footer />
				</>
			) : error ? (
				<div>
					<h1 style={{ textAlign: 'center' }}>
						Sorry, Couldn't find the coin you're looking for 😞
					</h1>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							margin: '2rem',
						}}
					>
						<a href='/dashboard'>
							<CustomisedButton text='Dashboard' />
						</a>
					</div>
					<Footer />
				</div>
			) : (
				<Loader />
			)}
		</>
	);
}

export default Coin;
