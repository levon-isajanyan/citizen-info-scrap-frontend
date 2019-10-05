import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store' //Vuex component import
import router from './router' //import router directory
import jquery from 'jquery' //Import jquery npm
import 'bootstrap/dist/css/bootstrap.min.css' //Import jquery css into project


global.$ = jquery; //Jquery variable statement
let Bootstrap = require('bootstrap'); //require Bootstrap module from npm


Vue.config.productionTip = false;

new Vue({
  router,
  store:store,
  render: h => h(App)
}).$mount('#app')
