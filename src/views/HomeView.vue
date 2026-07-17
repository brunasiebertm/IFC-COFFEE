<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { totalAvaliacoes, melhorNota, ultimaAvaliacao } from '@/store.js'

const notaFormatada = computed(() => {
  if (melhorNota.value === null) return '—'
  return melhorNota.value.toFixed(1)
})

const ultimaInfo = computed(() => {
  const cafe = ultimaAvaliacao.value
  if (!cafe) return 'Nenhuma avaliação ainda.'
  return cafe.nome + ' · ' + cafe.data
})
</script>

<template>
  <div class="home">
    <div class="card-hero">
      <div>
        <p class="subtitulo">Campeonato de Cafés Especiais</p>
        <h2>Registre avaliações e veja o ranking dos cafés participantes.</h2>
      </div>
      <div class="botoes">
        <RouterLink class="btn primario" to="/avaliacoes">Avaliações</RouterLink>
        <RouterLink class="btn secundario" to="/ranking">Ranking</RouterLink>
      </div>
    </div>

    <div class="cards">
      <div class="card-info">
        <span>Cafés avaliados</span>
        <strong>{{ totalAvaliacoes }}</strong>
      </div>
      <div class="card-info">
        <span>Melhor nota</span>
        <strong>{{ notaFormatada }}</strong>
      </div>
      <div class="card-info">
        <span>Última avaliação</span>
        <strong>{{ ultimaInfo }}</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home { display: flex; flex-direction: column; gap: 1rem; }

.card-hero {
  background: white;
  border: 1px solid #dcc9b0;
  border-radius: 10px;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.card-hero h2 {
  margin: 0.3rem 0 0;
  color: #2f2118;
  font-size: 1.2rem;
}

.subtitulo {
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #7b5c47;
  letter-spacing: 0.1em;
}

.botoes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn {
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.primario { background: #6f4e37; color: white; }
.secundario { color: #6f4e37; border: 1px solid #d3bca3; background: #fffaf4; }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
}

.card-info {
  background: #fffaf4;
  border: 1px solid #ead9bf;
  border-radius: 10px;
  padding: 0.8rem;
}

.card-info span {
  display: block;
  color: #7d654f;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.card-info strong {
  color: #2f2118;
}

@media (max-width: 700px) {
  .card-hero { flex-direction: column; align-items: flex-start; }
}
</style>
