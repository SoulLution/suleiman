import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import registrate from '@/components/registrate'
import request from '@/components/request'
import payment from '@/components/payment'
import about_us from '@/components/about_us'
import leads from '@/components/leads'
import success from '@/components/success'

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
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: about_us
    },
    {
      path: '/leads/:id',
      name: 'leads',
      component: leads
    },
    {
      path: '/success',
      name: 'success',
      component: success
    }
  ]
})
