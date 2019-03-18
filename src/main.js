import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);
Vue.config.productionTip = false

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/';

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
