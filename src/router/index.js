import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import CameraTest from '@/views/CameraTest.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/camera-test',
    name: 'CameraTest',
		component: CameraTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
