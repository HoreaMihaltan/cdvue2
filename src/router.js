import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/ViewUsers.vue')
    },
    {
      path: '/clienti',
      name: 'clienti',
      component: () => import(/* webpackChunkName: "about" */ './views/Clienti.vue')
    },
    {
      path: '/livratori',
      name: 'livratori',
      component: () => import(/* webpackChunkName: "about" */ './views/Livratori.vue')
    },
    {
      path: '/strazi',
      name: 'strazi',
      component: () => import(/* webpackChunkName: "about" */ './views/StraziCluj.vue')
    },
    {
      path: '/client/:id',
      name: 'client',
      component: () => import(/* webpackChunkName: "about" */ './views/Client.vue')
    },
    {
      path: '/livrator/:id',
      name: 'livrator',
      component: () => import(/* webpackChunkName: "about" */ './views/Livrator.vue')
    },
    {
      path: '/strada/:id',
      name: 'strada',
      component: () => import(/* webpackChunkName: "about" */ './views/StradaCluj.vue')
    },
    {
      path: '/clientnou',
      name: 'clientnou',
      component: () => import(/* webpackChunkName: "about" */ './views/ClientNou.vue')
    },
    {
      path: '/livratornou',
      name: 'livratornou',
      component: () => import(/* webpackChunkName: "about" */ './views/LivratorNou.vue')
    },
    {
      path: '/stradanoua',
      name: 'stradanoua',
      component: () => import(/* webpackChunkName: "about" */ './views/StradaNoua.vue')
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

      component: () => import('./views/Comenzi.vue')
    },
    {
      path: '/comenzi_azi',
      name: 'comenzi_azi',

      component: () => import('./liste/ComenziAzi.vue')
    },
    {
      path: '/comenzi_disponibile',
      name: 'comenzi_disponibile',

      component: () => import( './liste/ComenziDisponibile.vue')
    },
    {
      path: '/comenzi_gata',
      name: 'comenzi_gata',

      component: () => import(/* webpackChunkName: "about" */ './liste/ComenziGata.vue')
    },
    {
      path: '/comenzi_in_livrare',
      name: 'comenzi_in_livrare',

      component: () => import('./liste/ComenziInLivrare.vue')
    },
    {
      path: '/comenzi_in_lucru',
      name: 'comenzi_in_lucru',

      component: () => import( './liste/ComenziInLucru.vue')
    },
    {
      path: '/comenzi_livrate',
      name: 'comenzi_livrate',

      component: () => import('./liste/ComenziLivrate.vue')
    },
    {
      path: '/comenzi_programate',
      name: 'comenzi_programate',

      component: () => import('./liste/ComenziProgramate.vue')
    },
    {
      path: '/comenzi_ridicate',
      name: 'comenzi_ridicate',

      component: () => import('./liste/ComenziRidicate.vue')
    },
    {
      path: '/comenzi_nedecontate',
      name: 'comenzi_nedecontate',

      component: () => import('./liste/ComenziNedecontate.vue')
    },
    {
      path: '/comanda/:id',
      name: 'comanda',
          component: () => import('./views/Comanda.vue')
    },
    {
      path: '/modifica_adresa_comanda/:id',
      name: 'modifica_adresa_comanda',
          component: () => import('./views/ModificaAdresaCD.vue')
    },
    {
      path: '/comandanoua',
      name: 'comandanoua',
           component: () => import('./views/ComandaNoua.vue')
    },
    // {
    //   path: '/neworder/',
    //   name: 'neworder',
    //        component: () => import(/* webpackChunkName: "about" */ './views/NewOrder.vue')
    // },
    {
      path: '/dashboard',
      name: 'dashboard',
           component: () => import( './views/Dashboard.vue')
    },
    {
      path: '/logo/',
      name: 'logo',
           component: () => import('./assets/logo.png')
    },
    {
      path: '/listanav/',
      name: 'listnav',
           component: () => import('./components/ListNav.vue')
    }
  ]
})
