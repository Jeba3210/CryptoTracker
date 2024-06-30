import React, { useEffect, useState } from 'react'
import TabsComponent from '../component/dashboard/Tab/TabsComponent'
import Header from '../component/common/Header/Header'
import SearchComponent from '../component/dashboard/Search/SearchComponent';
import PaginationComponent from '../component/dashboard/Pagination/PaginationComponent';
import Loader from '../component/common/Loader/Loader';
import BackToTop from '../component/common/BackToTop/BackToTop';
import { get100CoinData } from '../functions/get100CoinData';

function Dashboard() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [paginatedCoins, setpaginatedCoins] = useState([]);

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setpaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };


  function onSearchChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  const filteredCoin = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase())
    || item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getAllCoin();

  }, [])

  async function getAllCoin() {
    const coinData = await get100CoinData();
    if (coinData) {
      setCoins(coinData);
      setpaginatedCoins(coinData.slice(0, 10));
      setIsLoading(false);
    }

  }

  return (
		<>
			<Header />

			{isLoading ? (
				<Loader />
			) : (
				<>
					<BackToTop />
					<SearchComponent
						search={search}
						onSearchChange={onSearchChange}
					/>
					<TabsComponent
						coins={search ? filteredCoin : paginatedCoins}
					/>
					{!search && (
						<PaginationComponent
							page={page}
							handlePageChange={handlePageChange}
						/>
					)}
				</>
			)}
		</>
  );
}

export default Dashboard