import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage'
import ShopPage from './pages/shop'
import Header from './components/header/header'
import SignIn from './pages/sign-in/sign-in'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
