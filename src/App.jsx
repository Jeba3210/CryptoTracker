
import './App.css'
import './component/common/Header/header.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          {/* <Route path='/compare' Component={Compare}/> */}
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
