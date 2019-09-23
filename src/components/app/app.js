import React, {Component} from 'react'
import './app.scss'
import Header from '../header';

import {
  SecurityPage,
  PricingPage,
  ProductPage,
  HomePage} from '../pages';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header/>
          <div className="router">
            <Switch>
              <Route
                path='/'
                component ={HomePage}
                exact
                />
              <Route
                path='/products'
                component ={ProductPage}
                exact
                />
              <Route
                path='/security'
                component ={SecurityPage}
                exact
                />
              <Route
                path='/pricing'
                component ={PricingPage}
                exact
                />
            </Switch>
          </div>
      </div>
    )
  }
}


export default App;
