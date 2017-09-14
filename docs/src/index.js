import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.directive('prism', {
  bind: function () {
      console.log(this.expression) // 'foo'
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})