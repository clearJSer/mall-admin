/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// 商品管理目录
const merchantRouter = {
  path: '/merchant',
  component: Layout,
  redirect: 'noRedirect',
  name: 'merchant',
  meta: {
    title: '商家管理',
    icon: 'table'
  },
  children: [
    {
      path: 'recharge',
      component: () => import('@/views/shike-merchant/recharge'),
      name: 'recharge',
      meta: { title: '商家充值', noCache: true }
    },
    {
      path: 'recharge',
      component: () => import('@/views/shike-merchant/recharge'),
      name: 'recharge',
      meta: { title: '商家充值', noCache: true }
    },
    {
      path: 'recharge',
      component: () => import('@/views/shike-merchant/recharge'),
      name: 'recharge',
      meta: { title: '商家充值', noCache: true }
    }
  ]
}

export default merchantRouter
