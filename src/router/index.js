import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import registrate from '@/components/registrate'
import request from '@/components/request'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/registrate',
      name: 'registrate',
      component: registrate
    },
    {
      path: '/request',
      name: 'request',
      component: request
    },
  ]
})
