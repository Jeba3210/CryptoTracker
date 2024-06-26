import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/common/Header/Header';
import Loader from '../component/common/Loader/Loader';
import { CoinObject } from '../functions/CoinObject';
import ListComponent from '../component/dashboard/List/ListComponent';
import CoinInfo from '../component/Coin/CoinInfo';

function Coin() {
const {id} = useParams();

const [isLoading, setIsLoading] = useState(true);
const [coinData, setCoinData] = useState();

useEffect(() =>{
    axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(response => {
        console.log(response.data);
        CoinObject(setCoinData, response.data);
        setIsLoading(false);

    })
    .catch(error => {
        console.log(error);
        setIsLoading(false);

    });

},[id])

  return (
   <>
   <Header />
{isLoading ? 
<Loader /> :
<> 
<div className='list-wrapper'>
<ListComponent coin={coinData}/>
</div>
<CoinInfo desc={coinData.desc}/>

</>

}
   </>
  )
}

export default Coin