import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Manager from '../views/Manager.vue'
import Edit from '../views/EditUsers.vue'
import Office from '../views/Office.vue'
import store from '../store'

const routes = [
  {
   path: '/',
   name: 'Home',
   component: Home
  },
  {
    path: '/manager',
    name: 'Manager',
    component:Manager,
    meta:{routeProtected:true}
  },
  {
    path: '/manager/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta:{routeProtected:true}
   },
   {
    path: '/manager/edit/:id', 
    name: 'Edit',
    component:Edit,
    meta:{routeProtected:true}
  },
  {
    path: '/manager/provider',
    name: 'Provider',
    component: () => import('../views/Provider.vue'),
    meta:{routeProtected:true}
   },
   {
    path: '/manager/office',
    name: 'Office',
    component: () => import('../views/Office.vue'),
    meta:{routeProtected:true}
   },
   
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const routeIsProtected = to.matched.some(item => item.meta.routeProtected)
  if(routeIsProtected && store.state.token === null) {
      
      next('/')
    } 
  else {      
      
      next()

  }
  
})

export default router
