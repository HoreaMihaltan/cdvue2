import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ './views/ViewUsers.vue')
    },
    {
      path: '/clienti',
      name: 'clienti',
      component: () => import(/* webpackChunkName: "about" */ './views/Clienti.vue')
    },
    {
      path: '/client/:id',
      name: 'client',
      component: () => import(/* webpackChunkName: "about" */ './views/Client.vue')
    },
    {
      path: '/clientnou',
      name: 'clientnou',
      component: () => import(/* webpackChunkName: "about" */ './views/ClientNou.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/userinput/',
      name: 'userinput',
      component: () => import(/* webpackChunkName: "about" */ './views/UserInput.vue')
    },
    // de aici comenzi
    {
      path: '/comenzi',
      name: 'comenzi',

      component: () => import(/* webpackChunkName: "about" */ './views/Comenzi.vue')
    },
    {
      path: '/comanda/:id',
      name: 'comanda',
          component: () => import(/* webpackChunkName: "about" */ './views/Comanda.vue')
    },
    {
      path: '/comandanoua/',
      name: 'comandanoua',
           component: () => import(/* webpackChunkName: "about" */ './views/ComandaNoua.vue')
    },
    // {
    //   path: '/neworder/',
    //   name: 'neworder',
    //        component: () => import(/* webpackChunkName: "about" */ './views/NewOrder.vue')
    // },
    {
      path: '/dashboard/',
      name: 'dashboard',
           component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
    },
    {
      path: '/logo/',
      name: 'logo',
           component: () => import(/* webpackChunkName: "about" */ './assets/logo.png')
    }
  ]
})
