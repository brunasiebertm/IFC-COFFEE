import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import RankingView from '../views/RankingView.vue'
import CafeDetailView from '../views/CafeDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/avaliacoes', name: 'avaliacoes', component: AvaliacoesView },
    { path: '/avaliar', redirect: { name: 'avaliacoes' } },
    { path: '/ranking', name: 'ranking', component: RankingView },
    { path: '/cafe/:id', name: 'detalhes', component: CafeDetailView },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundView },
  ],
})

export default router
