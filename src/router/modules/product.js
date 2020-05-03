/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// 商品管理目录
const productRouter = {
  path: '/product',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Product',
  meta: {
    title: '商品管理',
    icon: 'table'
  },
  children: [
    {
      path: 'categories',
      component: () => import('@/views/product/categories'),
      name: 'categories',
      meta: { title: '试用商品分类设置', noCache: true }
    },
    {
      path: 'sources',
      component: () => import('@/views/product/sources'),
      name: 'sources',
      meta: { title: '商品来源设置', noCache: true }
    },
    {
      path: 'trial-type',
      component: () => import('@/views/product/type'),
      name: 'trial-type',
      meta: { title: '试用活动类型', noCache: true }
    },
    {
      path: 'trial-specs',
      component: () => import('@/views/product/specs'),
      name: 'trial-specs',
      meta: { title: '试用品规格', noCache: true }
    },
    {
      path: 'applicant-requirement',
      component: () => import('@/views/product/applicantRequirement'),
      name: 'applicant-requirement',
      meta: { title: '试客申请条件', noCache: true }
    },
    {
      path: 'redeem-time',
      component: () => import('@/views/product/reddemTime'),
      name: 'redeem-time',
      meta: { title: '试用品领取时间', noCache: true }
    },
    {
      path: 'warning',
      component: () => import('@/views/product/warning'),
      name: 'warning',
      meta: { title: '试用活动温馨提示选项', noCache: true }
    }
  ]
}

export default productRouter
