import React from 'react';
import Header from '../component/common/Header/Header';
import Footer from '../component/common/Footer/Footer';
import WatchListComponent from '../component/WatchList/WatchListComponent';

function WatchList() {
	return (
		<>
			<Header />
			<WatchListComponent />
			<Footer />
		</>
	);
}

export default WatchList;
