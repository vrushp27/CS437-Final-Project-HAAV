import React from 'react';
// import logo from './logo.svg';
// import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { RiPhoneLine } from 'react-icons/ri';
// import { AiFillFlag } from 'react-icons/ai';

import './App.css';
import Home from './Components/Home';
import LiveFeed from './Components/LiveFeed';
import History from './Components/History';

function App() {
  return (
        <div>
        <Router>
          <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/livefeed' element = {<LiveFeed />} />
          <Route exact path = '/history' element = {<History />}/>
          </Routes>
        </Router>
        </div>
  )
};

export default App;
