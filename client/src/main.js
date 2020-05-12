import Vue from 'vue'
import App from './App.vue'

// vue router library import
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter)

// configuring bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService

// leaflet's css
// import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
