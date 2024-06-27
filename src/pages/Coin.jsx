import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/common/Header/Header';
import Loader from '../component/common/Loader/Loader';
import { CoinObject } from '../functions/CoinObject';
import ListComponent from '../component/dashboard/List/ListComponent';
import CoinInfo from '../component/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../component/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../component/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';

function Coin() {
const {id} = useParams();

const [isLoading, setIsLoading] = useState(true);
const [coinData, setCoinData] = useState();
const [days, setDays] = useState(30);
const [chartData, setChartData] = useState({});



useEffect(() =>{
    if(id){
        getData();
    }
 
},[id])

async function getData(){
    const coin_data = await getCoinData(id);
    if(coin_data){
        CoinObject(setCoinData, coin_data);
        const coin_prices = await getCoinPrices(id, days);
        if(coin_prices){
            
            console.log("Prices Consoled");
           settingChartData(setChartData, coin_prices)
            setIsLoading(false);
        
        }
    }
}

const handleDaysChange = async (event) => {
    // setIsLoading(true);
    setDays(event.target.value);
    const coin_prices = await getCoinPrices(id, event.target.value);
        if(coin_prices){
           console.log("Prices Consoled");
           settingChartData(setChartData, coin_prices);
            setIsLoading(false);
        
        }

  };
  


  return (
   <>
   <Header />
{isLoading ? 
<Loader /> :
<> 
<div className='list-wrapper'>
<ListComponent coin={coinData}/>
</div>
<div className="chart-wrapper">
    <SelectDays days={days} handleDaysChange={handleDaysChange}/>
    <LineChart chartData={chartData}/>
</div>
<CoinInfo desc={coinData.desc} name={coinData.name}/>

</>

}
   </>
  )
}

export default Coin