import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyExercises from '../views/MyExercises.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import { modifyexercise } from '../models/modifyexercise'
import Dashboard from "../views/Dashboard.vue";


Vue.use(VueRouter)

const routes = [
  {   path: '/', name: 'Home', component: Home },
  {   path: '/myexercises', name: 'MyExercises', component: MyExercises },
  {   path: '/signup', name: 'signup', component: SignUp },
  {   path: '/login', name: 'login', component: Login },
  {   path: '/admin', name: 'admin', component: Admin },
  {   path: "/dashboard", name: "dashboard", component: Dashboard },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
