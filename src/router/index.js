import Vue from 'vue'
import Router from 'vue-router'

// import Project from '@/components/project'
import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
import Forgot from '@/components/auth/forgot'
import Reset from '@/components/auth/reset'

Vue.use(Router)

export default new Router({
      mode: 'history',
      routes: [{
          path: '/',
          name: 'Login',
          component: Login,
          meta: {
            title: ''
          }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          title: ''
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
          title: ''
        }
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot,
        meta: {
          title: ''
        }
    },
    {
        path: '/reset',
        name: 'Reset',
        component: Reset,
        meta: {
          title: ''
        }
    }]
})