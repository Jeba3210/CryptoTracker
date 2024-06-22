import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './listComponent.css'
import { Tooltip } from '@mui/material';

function ListComponent({coin}) {
  return (
   <tr className='table-row'>
    <Tooltip title="Logo" placement='bottom-start'>
    <td className='td-img'>
                <img className='coin-img' src={coin.image} alt="" />
                </td >
                </Tooltip>
                <Tooltip title="Price info" placement='bottom-start'><td>
                    <p className='symbol'>{coin.symbol}</p>
                    <p className='name'>{coin.name}</p>
            </td></Tooltip>
                
  
     

            <Tooltip title="Price change in 24hrs" placement='bottom-start'>
            {coin.price_change_percentage_24h > 0 ?
                <td className='price-flex'>
                    <div className='marketcap_change'><p>{coin.price_change_percentage_24h.toFixed(2)}%</p></div>
                    <div  className='icon'><TrendingUpRoundedIcon/></div>
                </td>
                :
                <td className='price-flex'>
                    <div className='marketcap_change red'><p>{coin.price_change_percentage_24h.toFixed(2)}%</p></div>
                    <div className='icon red_icon'><TrendingDownRoundedIcon /></div>

                </td>}
                </Tooltip>

                <Tooltip title="Current Price" placement='bottom'>
            {coin.price_change_percentage_24h > 0 ?
                <td className='curr_price text-center'>${coin.current_price.toLocaleString() }</td>:
                <td className='curr_price red_curr text-center'>${coin.current_price.toLocaleString() }</td>
                }
                </Tooltip>


                   <Tooltip title="Total Volume" placement='bottom-start'>  <td className='total_vol text-right'> ${coin.total_volume.toLocaleString() }</td></Tooltip>
                   <Tooltip title="Market Cap" placement='bottom'><td className='market_cap text-right'> ${coin.market_cap.toLocaleString() }</td></Tooltip>
            
   </tr>
  )
}

export default ListComponent