import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import RankingView from '../views/RankingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/avaliacoes', name: 'avaliacoes', component: AvaliacoesView },
    { path: '/ranking', name: 'ranking', component: RankingView }
  ]
})

export default router
