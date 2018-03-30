import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home';
import Money from '../components/money/Money';
import Discover from '../components/discover/Discover';
import Account from '../components/account/Account';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/Home',
        name: 'Home',
        component: Home
    }, {
        path: '/Money',
        name: 'Money',
        component: Money
    }, {
        path: '/Discover',
        name: 'Discover',
        component: Discover
    }, {
        path: '/Account',
        name: 'Account',
        component: Account
    }]
});