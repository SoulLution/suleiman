import Vue from 'vue'
import App from './App'
import button from './components/button.vue'
import input from './components/input.vue'
import popup from './components/popup.vue'
import load from './components/load.vue'
import router from './router'
import languages from './assets/languages.js'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/suleiman-api/v1/'
Vue.prototype.$axios = axios

if(!localStorage.getItem('language'))
	localStorage.setItem('language', 'ru')

if(!languages[localStorage.getItem('language')])
	localStorage.setItem('language', 'ru')

Vue.prototype.$language = localStorage.getItem('language')
Vue.prototype.$languages = languages[localStorage.getItem('language')]

Vue.component('vButton', button)
Vue.component('vInput', input)
Vue.component('vPopup', popup)
Vue.component('vLoad', load)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
