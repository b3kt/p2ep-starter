
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', meta: { requiresAuth:true }, component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard/:category', meta: { requiresAuth:true }, component: () => import('pages/DashboardPage.vue'), props: true }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', meta: { requiresAuth:false }, component: () => import('pages/LoginPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
