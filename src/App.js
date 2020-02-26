import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ShopPage from './pages/shop'
import Header from './components/header/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
