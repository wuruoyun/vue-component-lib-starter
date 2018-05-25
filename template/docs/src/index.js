import Vue from 'vue'
import VueRouter from 'vue-router'
import * as mylib from 'my-lib'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(mylib)

const router = new VueRouter({
  routes, // short for `routes: routes`
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
