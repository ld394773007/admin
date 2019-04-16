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
          component: () => import('@/views/user/index')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import('@/views/message')
        },
        {
          path: 'test',
          name: 'testIndex',
          component: () => import('@/views/test/index'),
          children: [
            {
              path: '',
              name: 'test',
              component: () => import('@/views/test/test')
            },
            {
              path: 'personnel',
              name: 'personnel',
              component: () => import('@/views/test/personnel')
            },
            {
              path: 'document',
              name: 'document',
              component: () => import('@/views/test/document')
            },
          ]
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/views/team')
        },
        {
          path: 'enterprise',
          name: 'enterprise',
          component: () => import('@/views/enterprise/index'),
          children: [
            {
              path: 'info',
              name: 'enterpriseInfo',
              component: () => import('@/views/enterprise/info')
            },
            {
              path: 'pay',
              name: 'enterprisePay',
              component: () => import('@/views/enterprise/pay')
            },
            {
              path: 'ascription',
              name: 'enterpriseAscription',
              component: () => import('@/views/enterprise/ascription')
            },
            {
              path: 'delete',
              name: 'enterpriseDelete',
              component: () => import('@/views/enterprise/delete')
            },
            {
              path: 'power',
              name: 'enterprisePower',
              component: () => import('@/views/enterprise/power')
            },
            {
              path: 'project',
              name: 'enterpriseProject',
              component: () => import('@/views/enterprise/project')
            }
          ]
        }
      ]
    },
    {
      path: '/createTeam',
      name: 'createTeam',
      component: () => import('@/views/createTeam')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('@/components/codeInput')
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
    }
  ]
})
