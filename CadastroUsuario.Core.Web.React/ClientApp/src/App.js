import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ListUsers } from './components/User/ListUsers/ListUsers';
import { AddEditUser } from './components/User/AddEditUser/AddEditUser';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/ListUsers' component={ListUsers} />
                <Route path='/AddUser' component={AddEditUser} />
                <Route path='/EditUser/:id' component={AddEditUser} />
            </Layout>
        );
    }
}