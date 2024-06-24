import React, { useEffect, useState } from 'react'
import TabsComponent from '../component/dashboard/Tab/TabsComponent'
import Header from '../component/common/Header/Header'
import axios from 'axios'
import SearchComponent from '../component/dashboard/Search/SearchComponent';
import PaginationComponent from '../component/dashboard/Pagination/PaginationComponent';
import Loader from '../component/common/Loader/Loader';

function Dashboard() {

  const [coins, setCoins] = useState([]);
  const [search , setSearch] = useState("");
  const [isLoading , setIsLoading] = useState(true);

  const [paginatedCoins , setpaginatedCoins] = useState([]);

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value-1)*10;
    setpaginatedCoins(coins.slice(previousIndex, previousIndex+10));
  };


  function onSearchChange(e){
    setSearch(e.target.value);
    console.log(search);
  }

  const filteredCoin = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) 
  || item.symbol.toLowerCase().includes(search.toLowerCase())
);

    useEffect(() =>{
      axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) =>{
        setCoins(response.data);
        console.log(response);
        setpaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) =>{
        console.log("Error=>", error);
        setIsLoading(false);
      })

    },[])
    
  return (
    <>
    {isLoading ? <Loader/> : 
    <>
      <Header />
     <SearchComponent search={search} onSearchChange={onSearchChange}/>
     <TabsComponent coins={search ? filteredCoin : paginatedCoins}/>
     {!search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
    </>
   
     }
   
    
    </>
  )
}

export default Dashboard