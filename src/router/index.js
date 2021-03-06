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
          path: 'wiki',
          name: 'wiki',
          component: () => import('@/views/wiki')
        },
        {
          path: 'information',
          name: 'information',
          component: () => import('@/views/information')
        },
        {
          path: 'ring',
          name: 'ring',
          component: () => import('@/views/information/ring')
        },
        {
          path: 'histogram',
          name: 'histogram',
          component: () => import('@/views/information/histogram')
        },
        {
          path: 'gk',
          name: 'gk',
          component: () => import('@/views/information/gk')
        },
        {
          path: 'line',
          name: 'line',
          component: () => import('@/views/information/line')
        },
        {
          path: 'table',
          name: 'table',
          component: () => import('@/views/information/table')
        },
        {
          path: 'progress',
          name: 'progress',
          component: () => import('@/views/information/progress')
        },
        {
          path: 'help',
          name: 'help',
          component: () => import('@/views/help/index'),
          children: [
            {
              path:'',
              name: 'accountList',
              component: () => import('@/views/help/accountList')
            },
            {
              path:'account',
              name: 'account',
              component: () => import('@/views/help/account')
            }
          ]
        },
        {
          path: 'addWiki',
          name: 'addWiki',
          component: () => import('@/views/addWiki')
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
      path: '/order',
      name: 'order',
      component: () => import('@/views/order')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/pay')
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
    },
    {
      path: '/test',
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
        {
          path: 'indo',
          name: 'info',
          component: () => import('@/views/test/info')
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/statistics')
        },
        {
          path: 'trend',
          name: 'statisticsTrend',
          component: () => import('@/views/statistics/trend')
        },
        {
          path: 'ring',
          name: 'statisticsRing',
          component: () => import('@/views/statistics/ring')
        },
        {
          path: 'histogram',
          name: 'statisticsHistogram',
          component: () => import('@/views/statistics/histogram')
        },
        {
          path: 'gk',
          name: 'statisticsGk',
          component: () => import('@/views/statistics/gk')
        },
        {
          path: 'line',
          name: 'statisticsLine',
          component: () => import('@/views/statistics/line')
        },
        {
          path: 'table',
          name: 'statisticsTable',
          component: () => import('@/views/statistics/table')
        },
        {
          path: 'progress',
          name: 'statisticsProgress',
          component: () => import('@/views/statistics/progress')
        }
      ]
    },
  ]
})
