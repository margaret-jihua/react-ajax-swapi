import React from 'react';
import './style.css'

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

import Home from './Home'

function App() {
  return (
    <Router>
      <nav>
        STAR WARS STARSHIPS
      </nav>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
