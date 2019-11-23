import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=> import('../views/Home.vue')
const About =()=> import('../views/About.vue')
const Add =()=> import('../views/Add.vue')
const ProfileDetails =()=> import('../views/ProfileDetails.vue')
const edit =()=> import('../views/Edit.vue')
Vue.use(VueRouter)
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path:'/add', component:Add},
  {path:'/profile/:id', component:ProfileDetails},
  {path:'/edit/:id', component:edit}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
