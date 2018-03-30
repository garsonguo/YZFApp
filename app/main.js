import Vue from "vue";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router/index';
import App from './App';
// import store from './store/index';

require('font-awesome-webpack');
Vue.config.productionTip = false;

Vue.use(MintUI);

new Vue({
    el: '#app',
    router: router,
    // store: store,
    render: h => h(App),
    mounted() {

    },
    created() {

    }
});