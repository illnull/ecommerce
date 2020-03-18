import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ShopPage from './pages/shop'
import Header from './components/header/header'
import SignIn from './pages/sign-in/sign-in'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
