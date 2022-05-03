import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from "react";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {


  return (
    <>
   <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Contact' element={<Contact/>} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
