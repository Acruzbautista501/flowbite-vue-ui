import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AccordionView from '@/views/docs/AccordionView.vue'
import AlertView from '@/views/docs/AlertView.vue'
import AvatarView from '@/views/docs/AvatarView.vue'
import BadgeView from '@/views/docs/BadgeView.vue'
import BannerView from '@/views/docs/BannerView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/docs/accordion',
      name: 'accordion',
      component: AccordionView,
    },
    {
      path: '/docs/alert',
      name: 'alert',
      component: AlertView,
    },
    {
      path: '/docs/avatar',
      name: 'avatar',
      component: AvatarView,
    },
    {
      path: '/docs/badge',
      name: 'badge',
      component: BadgeView,
    },
    {
      path: '/docs/banner',
      name: 'banner',
      component: BannerView,
    },           
    //

    /* Placeholder routes */
    {
      path: '/docs/:component',
      name: 'component-doc',
      component: HomeView,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router