// src/App.js
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/booking" component={Booking} />
        {/* Add other routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
