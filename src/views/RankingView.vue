<script setup>
import { computed } from 'vue'
import { avaliacoes } from '@/store.js'
import LeaderboardTable from '@/components/LeaderboardTable.vue'

const rankingOrdenado = computed(() => {
  return [...avaliacoes.value].sort((a, b) => b.media - a.media)
})
</script>

const rankingOrdenado = computed(() => {
  return [...avaliacoes.value].sort((a, b) => b.media - a.media)
})

<template>
  <div>
    <h2>Ranking Geral</h2>
    <LeaderboardTable :cafes="rankingOrdenado" />
  </div>
</template>