import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css'  
import './assets/style.css'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Index from './components/Index'

const routes = [
  {
    name: 'home', 
    path: '/',
    component: Home
  },
  {
    name: 'posts', 
    path: '/posts',
    component: Index
  },
  {
    name: 'create', 
    path: '/create',
    component: Create
  },
  {
    name: 'edit', 
    path: '/edit/:id',
    component: Edit
  }
]

const router = new VueRouter({ mode: 'history', routes: routes})

new Vue(Vue.util.extend( {router}, App)).$mount('#app')
  