import React,{useEffect} from 'react';

import {Link,Route,Switch,withRouter} from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';

import Home from './Home';

import Register from './Register';

import Login from './Login';

import Dashboard from './Dashboard';

import Account from './Account';

import PageError from './PageError';

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/register'>
                        Register 
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route
                    path='/register'
                    component={Register}
                    exact
                />

                <Route
                    path='/login'
                    component={Login}
                    exact
                />

                <Route
                    path='/*'
                    component={PageError}
                    exact
                />

            </Switch>
        </>
    )
}

export default NavBar;