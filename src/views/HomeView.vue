<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { melhorNota, numeroDeAvaliacoes, ultimaAvaliacao } from '@/store.js'

const melhorNotaFormatada = computed(() => {
  if (melhorNota.value === null) {
    return '—'
  }

  return melhorNota.value.toFixed(1)
})

const ultimaAvaliacaoResumo = computed(() => {
  const cafe = ultimaAvaliacao.value

  if (!cafe) {
    return 'Ainda não há avaliações registradas.'
  }

  return `${cafe.nome} · ${cafe.data}`
})
</script>

<template>
  <section class="home-view">
    <div class="hero-card">
      <div>
        <p class="eyebrow">Bem-vindo(a) à competição</p>
        <h2>Gerencie o campeonato de cafés especiais com uma visão clara e simples.</h2>
        <p>
          Registre avaliações, acompanhe o ranking e consulte os detalhes completos de cada café em
          uma única SPA.
        </p>
      </div>

      <div class="hero-actions">
        <RouterLink class="primary-action" to="/avaliacoes">Cadastrar avaliação</RouterLink>
        <RouterLink class="secondary-action" to="/ranking">Ver ranking</RouterLink>
      </div>
    </div>

    <div class="stats-grid">
      <article class="stat-card">
        <span>Cafés avaliados</span>
        <strong>{{ numeroDeAvaliacoes }}</strong>
      </article>

      <article class="stat-card">
        <span>Melhor nota</span>
        <strong>{{ melhorNotaFormatada }}</strong>
      </article>

      <article class="stat-card">
        <span>Última avaliação</span>
        <strong>{{ ultimaAvaliacaoResumo }}</strong>
      </article>
    </div>

    <section class="home-info">
      <h3>O que a aplicação oferece</h3>
      <ul>
        <li>Cadastro de avaliações com média automática.</li>
        <li>Listagem dinâmica dos cafés avaliados.</li>
        <li>Ranking ordenado por nota final.</li>
        <li>Página de detalhes para cada avaliação.</li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-card,
.home-info {
  background: white;
  border: 1px solid rgba(111, 78, 55, 0.15);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 40px rgba(47, 33, 24, 0.06);
}

.hero-card {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
}

.hero-card h2 {
  margin: 0.25rem 0 0.5rem;
  color: #2f2118;
  font-size: 1.7rem;
}

.hero-card p {
  margin: 0;
  color: #5f4634;
  max-width: 640px;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.primary-action,
.secondary-action {
  text-align: center;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  font-weight: 700;
}

.primary-action {
  background: #6f4e37;
  color: white;
}

.secondary-action {
  color: #6f4e37;
  border: 1px solid #d3bca3;
  background: #fffaf4;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: #fffaf4;
  border: 1px solid #ead9bf;
  border-radius: 20px;
  padding: 1rem 1.1rem;
}

.stat-card span {
  display: block;
  color: #7d654f;
  font-size: 0.92rem;
  margin-bottom: 0.4rem;
}

.stat-card strong {
  color: #2f2118;
  font-size: 1.15rem;
}

.home-info ul {
  padding-left: 1.2rem;
  color: #5b4330;
  line-height: 1.7;
}

@media (max-width: 700px) {
  .hero-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
