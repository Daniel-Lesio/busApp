
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/rozklad', component: () => import('pages/rozklad.vue') },
      { path: '/rozklad2', component: () => import('pages/rozklad2.vue') },
      { path: '/contact', component: () => import('pages/contact.vue') },
      { path: '/aplikacja', component: () => import('pages/aplikacja.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
