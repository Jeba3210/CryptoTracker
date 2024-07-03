import './App.css';
import './component/common/Header/header.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import Compare from './pages/Compare';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WatchList from './pages/WatchList';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path=''>
						<Route path='/' Component={Home} />
						<Route path='/compare' Component={Compare} />
						<Route path='/watchlist' Component={WatchList} />
						<Route path='/dashboard' Component={Dashboard} />
						<Route path='/coin/:id' Component={Coin} />
					</Route>
				</Routes>
				<ToastContainer />
			</BrowserRouter>
		</>
	);
}

export default App;
