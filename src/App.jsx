import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Connect from './components/connect_page/Connect';
import Home from './components/home_page/Home';

export default function App() {
  return (
    <Router>
      <div id="app">
        <Home />
      </div>
    </Router>
  )
}
