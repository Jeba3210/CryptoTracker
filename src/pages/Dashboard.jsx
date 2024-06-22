import React, { useEffect, useState } from 'react'
import TabsComponent from '../component/dashboard/TabsComponent'
import Header from '../component/common/Header/Header'
import axios from 'axios'

function Dashboard() {

  const [coins, setCoins] = useState([]);

    useEffect(() =>{
      axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) =>{
        setCoins(response.data);
        console.log(response);
      })
      .catch((error) =>{
        console.log("Error=>", error);
      })

    },[])
    
  return (
    <>
    <Header />
    <h1>Dashboard</h1>
    <TabsComponent coins={coins}/>
    </>
  )
}

export default Dashboard