import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';


import LoginScreen from './components/screens/LoginScreen';
import AccountScreen from './components/screens/AccountScreen';
import AdminScreen from './components/screens/AdminScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoggedScreen from './components/screens/LoggedScreen';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='admin' element={<AdminScreen />} />
        <Route path='logged' element={<LoggedScreen />} />
        <Route path='account' element={<AccountScreen />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
