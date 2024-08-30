import React from 'react';
import './App.css';
import SideBar from './components/sideBar/sideBar';
import Chat from './components/chat/Chat';
import Settings from './components/settings/Settings'
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate, useParams, BrowserRouter } from 'react-router-dom';
import Account from './components/account/Account';



function AppRoute() {
  return (
	<BrowserRouter>
	<Routes>
		<Route path='/' element={<Chat/>}/>
		<Route path='/account' element={<Account/>}/>
		<Route path='/settings' element={<Settings/>}/>
	</Routes>
	</BrowserRouter>
  );
}

export default AppRoute;
