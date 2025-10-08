import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/views/index.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    name:"index",
    "component":index
  },
  {
    path:'/info',
    name:'info',
    component:()=>import('@/views/info.vue')
  }
],
})

export default router
