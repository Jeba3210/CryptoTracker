import React, { useEffect, useState } from 'react';
import Header from '../component/common/Header/Header';
import TabsComponent from '../component/dashboard/Tab/TabsComponent';
import CustomisedButton from '../component/Button/CustomisedButton';
import { get100CoinData } from '../functions/get100CoinData';

function WatchList() {
	const watchList = JSON.parse(localStorage.getItem('watchlist'));
	const [coins, setCoins] = useState([]);
	const [isLoading, setIsLoading] = useState();

	useEffect(() => {
		if (watchList) {
			getCoinData();
			console.log(coins);
		}
	}, []);

	async function getCoinData() {
		setIsLoading(true);
		const coin_data = await get100CoinData();
		if (coin_data) {
			setCoins(coin_data?.filter((coin) => watchList.includes(coin.id)));
			setIsLoading(false);
		}
	}

	return (
		<>
			<Header />
			{watchList ? (
				<TabsComponent coins={coins} />
			) : (
				<div style={{ marginTop: '260px' }}>
					<h3 style={{ textAlign: 'center' }}>
						No Crypto Currency is found in the Watchlist
					</h3>
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
				</div>
			)}
		</>
	);
}

export default WatchList;
