import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingPage from '../views/LoadingPage';
import Login from '../views/Login';
import Home from '../views/Home';
import Results from '../views/Results';
import Profile from '../views/Profile';

import { ROUTES } from '../constants';

const { LOGIN_PAGE, LOGIN, HOME, RESULTS, PROFILE } = ROUTES;

const AppNavigator = createStackNavigator({
    [LOGIN_PAGE] : LoadingPage,
    [LOGIN]      : Login,
    [HOME]       : Home,
    [RESULTS]    : Results,
    [PROFILE]    : Profile
}, {
    headerMode: 'none'
});

export default createAppContainer( AppNavigator );