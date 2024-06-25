
import './App.css'
import './component/common/Header/header.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          {/* <Route path='/compare' Component={Compare}/> */}
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/dashboard/:id' Component={Coin}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
