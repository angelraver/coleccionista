// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      //logged in
      {
        path: '/home',
        alias: ['', '/'],
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/collection/new',
        name: 'CollectionNew',
        component: () => import('@/views/CollectionForm.vue'),
      },
      {
        path: '/collection/edit/:id',
        name: 'CollectionEdit',
        component: () => import('@/views/CollectionForm.vue'),
      },
      {
        path: '/collection/add',
        name: 'ItemNew',
        component: () => import('@/views/ItemForm.vue'),
      },
      {
        path: '/collection/:id',
        name: 'CollectionDetail',
        component: () => import('@/views/CollectionDetail.vue'),
      },
      {
        path: '/item/new/:idCollection',
        name: 'ItemNew',
        component: () => import('@/views/ItemForm.vue'),
      },
      {
        path: '/item/:id',
        name: 'Item',
        component: () => import('@/views/ItemDetail.vue'),
      },
      {
        path: '/item/edit/:id',
        name: 'ItemEdit',
        component: () => import('@/views/ItemForm.vue'),
      },
      {
        path: '/photo/:id',
        name: 'Photo',
        component: () => import('@/views/ItemPhoto.vue'),
      },
    ],
  },
  {
    path: '/:userName',
    name: 'Landing',
    component: () => import('@/views/Landing.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
