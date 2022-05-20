import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RestProfile from './components/restaurant/RestProfile';
import Orders from './components/Orders/Orders';
import Menu from './components/Menus/menu'
import Logs from './components/Login/Logs';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ClientReg from './components/client/ClientReg';
import { useApp } from './components/contexts/AppContext'
import NotFound from './components/NotFound';

function App() {
  const { isLoggedIn } = useApp()
  console.log(isLoggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard/order'element={
           isLoggedIn?<Orders />: <Navigate replace to='/login' />} />
          <Route path='/dashboard/menu' element={
          isLoggedIn?<Menu/>: <Navigate replace to='/login' />} />
          <Route path='/signup' element={<Logs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regclient' element={<ClientReg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



