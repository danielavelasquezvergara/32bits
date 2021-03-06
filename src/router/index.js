import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Listado from '../views/Listado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: ()=>import('../views/Busqueda.vue'),
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import('../views/Ventas.vue'),
  },
  {
    path: '/total',
    name: 'Total',
    component: () => import('../views/Total.vue'),
  },
  {
    path: '/listado',
    name: 'Listado',
    component: Listado
  }
  //{
  // path: '/*',
  // name: '404',
  //component: () => import('../views/NotFound.vue'),
  //},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
