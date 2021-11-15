import React from 'react'
import './App.css';
import Body from './components/Body.js'
import Activities from './components/Activities';
import Home from './components/Home.js';
import Webcams from './components/Webcams';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="activity" element={<Activities />}/>
                <Route path="parkList" element={<Body />} />
                <Route path="webcams" element={<Webcams />}/>
            </Routes>
          </BrowserRouter>
    </div>

  );
}

export default App;