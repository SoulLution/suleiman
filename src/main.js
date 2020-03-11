// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import button from './components/button.vue'
import input from './components/input.vue'
import popup from './components/popup.vue'
import router from './router'
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.component('vButton', button)
Vue.component('vInput', input)
Vue.component('vPopup', popup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
