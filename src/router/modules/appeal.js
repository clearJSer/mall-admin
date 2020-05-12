/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// 申诉管理目录
const appealRouter = {
  path: '/appeal',
  component: Layout,
  redirect: 'noRedirect',
  name: 'appeal',
  meta: {
    title: '申诉管理',
    icon: 'table'
  },
  children: [
    {
      path: 'activity',
      component: () => import('@/views/shike-appeal/activity'),
      name: 'activity',
      meta: { title: '试用活动申诉管理', noCache: true }
    },
    {
      path: 'report',
      component: () => import('@/views/shike-appeal/report'),
      name: 'report',
      meta: { title: '试用报告申诉管理', noCache: true }
    }
    // {
    //   path: 'recharge',
    //   component: () => import('@/views/shike-merchant/recharge'),
    //   name: 'recharge',
    //   meta: { title: '商家充值', noCache: true }
    // }
  ]
}

export default appealRouter
