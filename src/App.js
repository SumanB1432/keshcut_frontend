import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Routes>
      {/* <Route path="/logout" element={<h1>logout component</h1>}></Route> */}
      <Route path="/" element={<h1>Hello</h1>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App