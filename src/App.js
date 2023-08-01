import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';
import Login from './routes/authentication/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
