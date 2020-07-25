import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import { router } from './route'
import { store } from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.filter("currency", (value) => {
    return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + "₺";
    //return parseFloat(value).toFixed(2) + "₺";
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})