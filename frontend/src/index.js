import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Home from './Components/Home';
import Navbar from './Components/navbar';
import Contact from './Components/contact';
import Therapist from './Components/Therapist';
import Login from './Components/Login';
import Music from './Components/Music';
import Guide from './Components/Guide';
import Cathybrown from './Components/cathybrown';
import Pratik from './Components/Pratik';
function MainApp()
{
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="/homepage" element={<Homepage/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/therapist" element={<Therapist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/cathy_brown" element={<Cathybrown/>}/>
        <Route path="/guide" element={<Guide/>}/>
        <Route path="/pratik" element={<Pratik/>}/>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<MainApp />, document.getElementById('root'));
