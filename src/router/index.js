import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Detail from '../views/detail.vue'
import detailGalary from '../components/detail/detailGalary.vue'
import mapContent from '../components/detail/mapContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/location',
    name: 'location',
    // component: Location
    component: () => import(/* webpackChunkName: "Location" */ '../views/Location.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    // component: Detail,
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue'),
    children:[
      {
        path:'galary',
        component:detailGalary
      },
      {
        path:'map',
        component:mapContent
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
