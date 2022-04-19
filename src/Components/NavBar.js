import React,{useEffect} from 'react';
import {Link,Route,Switch,withRouter} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Account from './Account';
import PageError from './PageError';
import {getAdminDetails,setAdminInfo} from '../actions/roleAction';

const NavBar = (props) => {
    // Invoke useDispatch hook
    const dispatch = useDispatch();

    // To check whether user is logged in or not
    const fetchData = () => {
        // GET JWT_TOKEN
        const token = localStorage.getItem('JWT_TOKEN');

        if (token) {
            // Dispatch an action
            dispatch(getAdminDetails(token))
        }
    }

    // Invoke useEffect Hook
    useEffect(fetchData, []);

    // Read state within the component
    const store = useSelector((state) => {
        return state.adminRole.data;
    })
    console.log(store);

    // Event Handler as callback function
    const handleLogOut = (e) => {
        // remove token from localStorage
        localStorage.removeItem('JWT_TOKEN');

        alert('you are logged out successfully');

        // Dispatch action to store
        dispatch(setAdminInfo({}));

        // redirect user to home page
        props.history.push('/home');
    }

    return (
        <>
            <nav>

                <ul className='list-group'>

                    <li className='list-group-item'>
                        <Link to='/home'>
                            Home 
                        </Link>
                    </li>

                    {/* Conditional Rendering - Ternary Operator */}
                    {
                        Object.keys(store).length > 0 ?  (
                                <>
                                    <li className='list-group-item'>
                                        <Link 
                                            to='/admin/account' 
                                        >
                                            Account 
                                        </Link>
                                    </li>

                                    <li className='list-group-item'>
                                        <Link 
                                            to='/dashboard' 
                                        >
                                            Dashboard
                                        </Link>
                                    </li>

                                    <li className='list-group-item'>
                                        <Link 
                                            to='#' 
                                            onClick={handleLogOut}
                                        >
                                            Logout 
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <h4 className='text-info mx-2 my-3'>
                                        For Admin
                                    </h4>

                                    <li className='list-group-item'>
                                        <Link 
                                            to='/admin/register'
                                        >
                                            Register 
                                        </Link>
                                    </li>

                                    <li className='list-group-item'>
                                        <Link 
                                            to='/admin/login'
                                        >
                                            Login
                                        </Link>
                                    </li>
                                </>
                            )
                    }

                </ul>

            </nav>
            
            <Switch>

                <Route
                    path='/home'
                    component={Home}
                    exact
                />

                <Route
                    path='/admin/register'
                    component={Register}
                    exact
                />

                <Route
                    path='/admin/login'
                    component={Login}
                    exact
                />

                <Route
                    path='/admin/account'
                    component={Account}
                    exact
                />

                <Route
                    path='/dashboard'
                    component={Dashboard}
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

export default withRouter(NavBar);