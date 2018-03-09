import Vue from 'vue';
import router from './router/index';
import App from './App';
require('font-awesome-webpack');
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});