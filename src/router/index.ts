import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/intent',
      name: 'intent',
      component: () => import('../views/IntentView.vue'),
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import('../views/DrawView.vue'),
    },
    {
      path: '/reading/:id',
      name: 'reading',
      component: () => import('../views/ReadingView.vue'),
    },
    {
      path: '/journal/:id',
      name: 'journal',
      component: () => import('../views/JournalView.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
