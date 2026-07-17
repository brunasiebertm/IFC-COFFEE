<script setup>
import { computed } from 'vue'
import { avaliacoes } from '@/store.js'
import LeaderboardTable from '@/components/LeaderboardTable.vue'

const ranking = computed(() => {
  const lista = []
  for (let i = 0; i < avaliacoes.value.length; i++) {
    lista.push(avaliacoes.value[i])
  }
  return lista.sort((a, b) => b.media - a.media)
})
</script>

<template>
  <div class="ranking">
    <div class="card-topo">
      <h2>Ranking</h2>
      <p>Classificação dos cafés avaliados.</p>
    </div>

    <LeaderboardTable :cafes="ranking" />
  </div>
</template>

<style scoped>
.ranking { display: flex; flex-direction: column; gap: 1rem; }
.card-topo { background: white; border: 1px solid #dcc9b0; border-radius: 10px; padding: 1rem; }
.card-topo h2 { margin: 0; color: #2f2118; font-size: 1.1rem; }
.card-topo p { margin: 0.3rem 0 0; color: #5f4634; font-size: 0.9rem; }
</style>
