export default [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/components/Home.vue'),
        meta: { title: 'Home' }
      },
      {
        path: 'crud',
        name: 'Crud',
        component: () => import('@/components/crud/Index.vue'),
        meta: { title: 'Crud' }
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    meta: { requiresGuest: true },
    children: [
      { path: '', redirect: { name: 'Login' } },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/components/auth/Register.vue'),
        meta: { title: 'Register' }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/auth/Login.vue'),
        meta: { title: 'Login' }
      },
      {
        path: 'recovery',
        name: 'Recovery',
        component: () => import('@/components/auth/Recovery.vue'),
        meta: { title: 'Recovery' }
      }
    ]
  }
]
