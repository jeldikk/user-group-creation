import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"

import {Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux'


import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage"
import CreateGroupPage from "./pages/create-group-page/create-group-page"

import {setUsers} from "./redux/users/users.actions"

class App extends Component {

  constructor(props){
    super(props);

    
  }

  // componentDidMount(){

  //   // console.log("componenet mounted")

  //   const fetchData = async () => {
  //       const results = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
  //       console.log(results.data)
  //       this.props.setUsers(results.data)
  //       // this.setState({users: results.data})

  //   }
    
  //   fetchData();


  // }

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

const mapDispatchToState = (dispatch) => {
  return {
    setUsers: (userlist) => dispatch(setUsers(userlist))
  }
}

export default connect(null, mapDispatchToState)(App)

