import React, { useEffect, useState } from 'react';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './listComponent.css';
import { Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { removeItemFromWatchlist } from '../../../functions/removeItemFromWatchlist';
import { addItemToWatchlist } from '../../../functions/addItemToWatchlist';

function ListComponent({ coin }) {
	const watchList = JSON.parse(localStorage.getItem('watchlist'));
	const [isCoinAdded, setIsCoinAdded] = useState(
		watchList?.includes(coin.id)
	);

	const navigate = useNavigate();

	return (
		<div
			className='table-row'
			onClick={() => {
				navigate(`/coin/${coin?.id}`);
			}}
		>
			<Tooltip placement='bottom-start'>
				<div className='td-img td'>
					<img className='coin-img img' src={coin?.image} alt='' />
				</div>
			</Tooltip>
			<Tooltip title='Price info' placement='bottom-start'>
				<div className='td'>
					<p className='symbol td-symbol'>{coin?.symbol}</p>
					<p className='name td-name'>{coin?.name}</p>
				</div>
			</Tooltip>

			<Tooltip title='Price change in 24hrs' placement='bottom-start'>
				{coin?.price_change_percentage_24h > 0 ? (
					<div className='price-flex td'>
						<div className='marketcap_change td-price-change'>
							<p>
								{coin?.price_change_percentage_24h?.toFixed(2)}%
							</p>
						</div>
						<div className='icon td-icon'>
							<TrendingUpRoundedIcon />
						</div>
					</div>
				) : (
					<div className='price-flex td'>
						<div className='marketcap_change td-price-change red'>
							<p>
								{coin?.price_change_percentage_24h?.toFixed(2)}%
							</p>
						</div>
						<div className='icon td-icon red_icon'>
							<TrendingDownRoundedIcon />
						</div>
					</div>
				)}
			</Tooltip>

			<Tooltip title='Current Price' placement='bottom'>
				{coin?.price_change_percentage_24h > 0 ? (
					<div className='curr_price td-curr-price text-center td'>
						${coin?.current_price?.toLocaleString()}
					</div>
				) : (
					<div className='curr_price td-curr-price red_curr text-center td'>
						${coin?.current_price?.toLocaleString()}
					</div>
				)}
			</Tooltip>

			<Tooltip placement='bottom-start'>
				<div className='total_vol list-total-vol td-total-vol text-right td'>
					{coin?.total_volume?.toLocaleString()}
				</div>
			</Tooltip>

			<Tooltip placement='bottom'>
				<div className='market_cap list-market-cap  td-market-cap text-right td'>
					${coin?.market_cap?.toLocaleString()}
				</div>
			</Tooltip>

			<div
				className={`watch_div ${
					coin.price_change_percentage_24h < 0 && 'watch_red'
				}`}
				onClick={(e) => {
					e.preventDefault();
					if (isCoinAdded) {
						removeItemFromWatchlist(e, coin.id, setIsCoinAdded);
					} else {
						setIsCoinAdded(true);
						addItemToWatchlist(e, coin.id);
					}
				}}
			>
				<StarOutlineOutlinedIcon />
			</div>
		</div>
	);
}

export default ListComponent;
