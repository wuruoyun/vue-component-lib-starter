import Vue from 'vue';
import VueRouter from 'vue-router';
import * as mylib from '{{ name }}';
import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(mylib);

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});