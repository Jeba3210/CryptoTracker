import './App.css';
import './component/common/Header/header.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import Compare from './pages/Compare';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path=''>
						<Route path='/' Component={Home} />
						<Route path='/compare' Component={Compare} />
						<Route path='/dashboard' Component={Dashboard} />
						<Route path='/coin/:id' Component={Coin} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
