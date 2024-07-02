import React, { useEffect, useState } from 'react';
import Header from '../component/common/Header/Header';
import SelectCoin from '../component/Compare/SelectCoin/SelectCoin';
import SelectDays from '../component/Coin/SelectDays/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { coinObject } from '../functions/coinObject';
import Loader from '../component/common/Loader/Loader';
import ListComponent from '../component/dashboard/List/ListComponent';
import CoinInfo from '../component/Coin/CoinInfo/CoinInfo';
import LineChart from '../component/Coin/LineChart/LineChart';
import { SettingChartData } from '../functions/SettingChartData';
import TogglePriceType from '../component/Coin/PriceType/TogglePriceType';

function Compare() {
	const [days, setDays] = useState(30);
	const [firstCrypto, setFirstCrypto] = useState('bitcoin');
	const [secondCrypto, setSecondCrypto] = useState('ethereum');
	const [isSecondCoin, setIsSecondCoin] = useState(false);
	const [firstCryptoData, setFirstCryptoData] = useState({});
	const [secondCryptoData, setSecondCryptoData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [],
	});
	const [priceType, setPriceType] = useState('prices');

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		setIsLoading(true);
		console.log(firstCrypto, secondCrypto);
		const coin_data1 = await getCoinData(firstCrypto);
		if (coin_data1) {
			const coin_data2 = await getCoinData(secondCrypto);
			console.log(coin_data1);
			coinObject(setFirstCryptoData, coin_data1);
			console.log(firstCryptoData);

			if (coin_data2) {
				coinObject(setSecondCryptoData, coin_data2);

				const coin_prices1 = await getCoinPrices(
					firstCrypto,
					days,
					priceType
				);
				const coin_prices2 = await getCoinPrices(
					secondCrypto,
					days,
					priceType
				);
				SettingChartData(setChartData, coin_prices1, coin_prices2);
				console.log('BOTH COINS CONSOLED');
				console.log(firstCryptoData);
				console.log(secondCryptoData);

				setIsLoading(false);
			}
		}
	}

	async function handleCoinChange(e, isSecondCoin) {
		setIsLoading(true);
		if (isSecondCoin) {
			setSecondCrypto(e.target.value);
			const coin_data = await getCoinData(e.target.value);
			coinObject(setSecondCryptoData, coin_data);
			const coin_prices1 = await getCoinPrices(
				firstCrypto,
				days,
				priceType
			);
			const coin_prices2 = await getCoinPrices(
				e.target.value,
				days,
				priceType
			);
			console.log('BOTH Prices CONSOLED');
			setIsLoading(false);
		} else {
			setFirstCrypto(e.target.value);
			const coin_data = await getCoinData(e.target.value);
			coinObject(setFirstCryptoData, coin_data);
		}
	}

	async function handleDaysChange(e) {
		setIsLoading(true);
		setDays(e.target.value);
		const coin_prices1 = await getCoinPrices(
			firstCrypto,
			e.target.value,
			priceType
		);
		const coin_prices2 = await getCoinPrices(
			secondCrypto,
			e.target.value,
			priceType
		);
		SettingChartData(setChartData, coin_prices1, coin_prices2);
		setIsLoading(false);
	}

	const handlePriceTypeChange = async (event, newPriceType) => {
		setPriceType(newPriceType);
		console.log(newPriceType);
		const coin_prices1 = await getCoinPrices(
			firstCrypto,
			days,
			newPriceType
		);
		const coin_prices2 = await getCoinPrices(
			secondCrypto,
			days,
			newPriceType
		);
		SettingChartData(setChartData, coin_prices1, coin_prices2);
		setIsLoading(false);
	};

	return (
		<>
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className='select_coin_days'>
						<SelectCoin
							firstCrypto={firstCrypto}
							handleCoinChange={handleCoinChange}
							secondCrypto={secondCrypto}
							setFirstCrypto={setFirstCrypto}
							setSecondCrypto={setSecondCrypto}
						/>
						<SelectDays
							days={days}
							handleDaysChange={handleDaysChange}
							noPTag={true}
						/>
					</div>
					{firstCryptoData && (
						<>
							<div className='list-wrapper'>
								<ListComponent coin={firstCryptoData} />
							</div>
							<div className='list-wrapper'>
								<ListComponent coin={secondCryptoData} />
							</div>
							<div className='chart-wrapper'>
								<TogglePriceType
									priceType={priceType}
									handlePriceTypeChange={
										handlePriceTypeChange
									}
								/>
								<LineChart
									chartData={chartData}
									multiAxis={true}
								/>
							</div>

							<CoinInfo
								desc={firstCryptoData?.desc}
								name={firstCryptoData?.name}
							/>
							<CoinInfo
								desc={secondCryptoData?.desc}
								name={secondCryptoData?.name}
							/>
						</>
					)}
				</>
			)}
		</>
	);
}

export default Compare;
