// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/coleccionista/home',
        alias: ['/coleccionista', '/coleccionista/'],
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/coleccionista/collection/new',
        name: 'CollectionNew',
        component: () => import('@/views/CollectionForm.vue'),
      },
      {
        path: '/coleccionista/collection/edit/:id',
        name: 'CollectionEdit',
        component: () => import('@/views/CollectionForm.vue'),
      },
      {
        path: '/coleccionista/collection/add',
        name: 'ItemNew',
        component: () => import('@/views/ItemForm.vue'),
      },
      {
        path: '/coleccionista/collection/:id',
        name: 'CollectionDetail',
        component: () => import('@/views/CollectionDetail.vue'),
      },
      {
        path: '/coleccionista/item/new/:idCollection',
        name: 'ItemNew',
        component: () => import('@/views/ItemForm.vue'),
      },
      {
        path: '/coleccionista/item/:id',
        name: 'Item',
        component: () => import('@/views/ItemDetail.vue'),
      },
      {
        path: '/coleccionista/item/edit/:id',
        name: 'ItemEdit',
        component: () => import('@/views/ItemForm.vue'),
      },
    ],
  },
  {
    path: '/coleccionista/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
