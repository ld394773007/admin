import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      children: [
        {
          path: '',
          name: 'work',
          component: () => import('@/views/work')
        },
        {
          path: 'project',
          name: 'project',
          component: () => import('@/views/prject')
        },
        {
          path: 'addTeam',
          name: 'addTeam',
          component: () => import('@/views/addTeam')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/user')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import('@/views/message')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/views/team')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/resetPass',
      name: 'resetPass',
      component: () => import('@/views/resetPass')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('@/views/reset')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    },

  ]
})
