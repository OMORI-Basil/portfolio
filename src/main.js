import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'
import Home from './views/Home.vue'
import Products3D from './views/Products3D.vue'
import Scenes3D from './views/Scenes3D.vue'
import Video3D from './views/Video3D.vue'
import GraphicDesign from './views/GraphicDesign.vue'
import PostProduction from './views/PostProduction.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products-3d', name: 'Products3D', component: Products3D },
  { path: '/scenes-3d', name: 'Scenes3D', component: Scenes3D },
  { path: '/video-3d', name: 'Video3D', component: Video3D },
  { path: '/graphic-design', name: 'GraphicDesign', component: GraphicDesign },
  { path: '/post-production', name: 'PostProduction', component: PostProduction },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
