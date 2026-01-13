import { createRouter, createWebHistory } from 'vue-router'
import DeckView from '../views/DeckView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/intent',
    },
    {
      path: '/intent',
      name: 'intent',
      component: () => import('../views/IntentView.vue'),
    },
    {
      path: '/deck',
      name: 'deck',
      component: DeckView,
      children: [
        {
          name: 'simple',
          path: 'simple',
          component: () => import('../views/DeckSimpleView.vue'),
        },
        {
          name: 'three',
          path: 'three',
          component: () => import('../views/DeckThreeView.vue'),
        },
        {
          name: 'other',
          path: 'other',
          component: () => import('../views/DeckOtherView.vue'),
        },
      ],
    },
  ],
})

export default router
