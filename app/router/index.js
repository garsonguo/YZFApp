import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home';
import Money from '../components/home/Money';
import Discover from '../components/home/Discover';
import Account from '../components/home/Account';
import Login from '../components/login';

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