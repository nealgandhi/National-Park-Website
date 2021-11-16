import React from 'react'
import './App.css';
import Body from './components/Body.js'
import Activities from './components/Activities';
import Home from './components/Home.js';
import Webcams from './components/Webcams';
import { ParkFilterProvider } from './components/ParkFilter';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App(){
  return (
    <div className="App">
      {/* Provider to wrap all of my components to let the data from body.js be accessed by any of the 
          sibling components
      */}
      <ParkFilterProvider>
        {/* Browser Routing to allow for different web pages to prevent clutter on individual pages */}
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="activity" element={<Activities />}/>
                <Route path="parkList" element={<Body />} />
                <Route path="webcams" element={<Webcams />}/>
            </Routes>
          </BrowserRouter>
        </ParkFilterProvider>
    </div>

  );
}

export default App;