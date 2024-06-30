import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './selectCoin.css';
import { useEffect, useState } from 'react';
import { get100CoinData } from '../../../functions/get100CoinData';

export default function SelectCoin({
	firstCrypto,
	secondCrypto,
	handleCoinChange,
}) {
	const [allCoin, setAllCoin] = useState([]);

	useEffect(() => {
		getAllCoin();
	}, []);

	async function getAllCoin() {
		const coinData = await get100CoinData();
		setAllCoin(coinData);
	}

	const style = {
		height: '2.5rem',
		color: 'var(--white)',
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--white)',
		},

		'& .MuiSvgIcon-root': {
			color: 'var(--white)',
		},

		'&:hover': {
			'&& fieldset': {
				borderColor: '#3DBC1D',
			},
		},
	};

	return (
		<div className='select-coin'>
			<p>Crypto 1</p>
			<Select
				sx={style}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={firstCrypto}
				label='Crypto 1'
				onChange={(e) => handleCoinChange(e, false)}
			>
				{allCoin
					// ?.filter((coin) => coin.id != secondCrypto)
					?.map((coin) => (
						<MenuItem value={coin.id} key={coin.id}>
							{coin.name}
						</MenuItem>
					))}
			</Select>
			<p>Crypto 2</p>
			<Select
				sx={style}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={secondCrypto}
				label='Crypto 2'
				onChange={(e) => handleCoinChange(e, true)}
			>
				{allCoin
					// ?.filter((coin) => coin.id != firstCrypto)
					?.map((coin) => (
						<MenuItem value={coin.id} key={coin.id}>
							{coin.name}
						</MenuItem>
					))}
			</Select>
		</div>
	);
}
