import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArchivesView from '../views/ArchivesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/archives',
<<<<<<< HEAD
      name: 'archives',
=======
      name: '归档',
>>>>>>> 157645045474d705c87641d2c414ae31657a0ffe
      component: ArchivesView,
    },
  ],
})

export default router
