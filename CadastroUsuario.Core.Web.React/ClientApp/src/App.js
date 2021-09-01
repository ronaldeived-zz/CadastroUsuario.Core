import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ListUsers } from './components/User/ListUsers/ListUsers';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}


//import React from 'react';
//import AddUser from './User/AddUser/AddUser';
//import ListUsers from './User/ListUsers/ListUsers';
//import EditUser from './User/EditUser/EditUser';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import './App.css';
//function App() {
//    return (
//        <Router>
//            <div className="container">
//                <nav className="navbar navbar-expand-lg navheader">
//                    <div className="collapse navbar-collapse" >
//                        <ul className="navbar-nav mr-auto">
//                            <li className="nav-item">
//                                <Link to={'/AddUser'} className="nav-link">Add User</Link>
//                            </li>
//                            <li className="nav-item">
//                                <Link to={'/ListUser'} className="nav-link">Users List</Link>
//                            </li>
//                        </ul>
//                    </div>
//                </nav> <br />
//                <Switch>
//                    <Route exact path='/AddUser' component={AddUser} />
//                    <Route path='/EditUser/:id' component={EditUser} />
//                    <Route path='/ListUsers' component={ListUsers} />
//                </Switch>
//            </div>
//        </Router>
//    );
//}

//export default App;