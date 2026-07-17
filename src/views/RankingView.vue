<script setup>
import { computed } from 'vue'
import { avaliacoes } from '@/store.js'
import LeaderboardTable from '@/components/LeaderboardTable.vue'

const rankingOrdenado = computed(() => [...avaliacoes.value].sort((a, b) => b.media - a.media))
</script>

<template>
  <section class="ranking-view">
    <div class="intro-card">
      <div>
        <p class="eyebrow">Ranking</p>
        <h2>Classificação final dos cafés avaliados.</h2>
      </div>
    </div>

    <LeaderboardTable :cafes="rankingOrdenado" />
  </section>
</template>

<style scoped>
.ranking-view {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.intro-card {
  background: white;
  border: 1px solid rgba(111, 78, 55, 0.15);
  border-radius: 24px;
  padding: 1.4rem;
  box-shadow: 0 18px 40px rgba(47, 33, 24, 0.06);
}

.intro-card h2 {
  margin: 0.25rem 0 0;
  color: #2f2118;
}
</style>
