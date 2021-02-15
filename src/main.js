import Vue from 'vue'
import App from './App'
import button from './components/button.vue'
import radio from './components/radio.vue'
import checkBox from './components/checkBox.vue'
import input from './components/input.vue'
import popup from './components/popup.vue'
import load from './components/load.vue'
import router from './router'
import languages from './assets/languages.js'
import axios from 'axios';

// axios.defaults.baseURL = 'https://admin.suleimanpartners.com:9001/suleiman-api/v1/'
axios.defaults.baseURL = 'http://localhost:9001/suleiman-api/v1/'
Vue.prototype.$axios = axios

if(!localStorage.getItem('language'))
	localStorage.setItem('language', 'ru')

if(!languages[localStorage.getItem('language')])
	localStorage.setItem('language', 'ru')

Vue.prototype.$language = localStorage.getItem('language')
Vue.prototype.$languages = languages[localStorage.getItem('language')]

Vue.component('vButton', button)
Vue.component('vRadio', radio)
Vue.component('vCheckBox', checkBox)
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
