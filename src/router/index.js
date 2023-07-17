import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/page/home/Home.vue'
import Mobile from '../views/page/mobile/Mobile.vue'
import iPhone from '../views/page/mobile/iPhone.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/",component: Home },
    {path:"/mobile",component: Mobile },
    {path:"/mobile/iphone",component: iPhone },
  ]
})

export default router
