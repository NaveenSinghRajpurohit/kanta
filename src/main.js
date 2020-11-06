import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'


import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' 
import './registerServiceWorker'
import './assets/styles/main-style.scss'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMoment, {
  moment,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
