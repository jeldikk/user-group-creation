import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

import {Route, Switch} from 'react-router-dom'


import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage"
import CreateGroupPage from "./pages/create-group-page/create-group-page"

class App extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/create" component={CreateGroupPage} />
        </Switch>
      </div>
    )
  }
}

export default App

