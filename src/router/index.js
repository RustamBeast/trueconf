import { createRouter, createWebHistory } from 'vue-router'
import RedColoredTrafficLight from '../views/RedColoredTrafficLight.vue'
import YellowColoredTrafficLight from '../views/YellowColoredTrafficLight.vue'
import GreenColoredTrafficLight from '../views/GreenColoredTrafficLight.vue'

const routes = [
  {
    path: '/red',
    name: 'RedColoredTrafficLight',
    component: RedColoredTrafficLight
  },
  {
    path: '/yellow',
    name: 'YellowColoredTrafficLight',
    component: YellowColoredTrafficLight
  },
  {
    path: '/green',
    name: 'GreenColoredTrafficLight',
    component: GreenColoredTrafficLight
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
