import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import Recipe from './components/Recipe'
import Cookies from 'js-cookie'
Vue.use(Router)

function guard(to, from, next){
  if(Cookies.get('auth')) {
      next(); 
  } else{
      next('/login'); 
  }
}

function unguard(to, from, next){
  if(!Cookies.get('auth')) {
      next(); 
  } else{
      next('/');
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      beforeEnter: guard,
      component: Recipe
    },
    {
      path: '/register',
      beforeEnter: unguard,
      component: Register
    },
    {
      path: '/login',
      beforeEnter: unguard,
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
