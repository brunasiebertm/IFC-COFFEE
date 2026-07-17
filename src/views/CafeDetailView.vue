<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { avaliacoes } from '@/store.js'

const route = useRoute()

const cafe = computed(() => {
  const id = Number(route.params.id)
  for (let i = 0; i < avaliacoes.value.length; i++) {
    if (avaliacoes.value[i].id === id) {
      return avaliacoes.value[i]
    }
  }
  return null
})

const criterios = computed(() => {
  if (!cafe.value) return []
  return [
    { nome: 'Aroma', valor: cafe.value.aroma },
    { nome: 'Sabor', valor: cafe.value.sabor },
    { nome: 'Acidez', valor: cafe.value.acidez },
    { nome: 'Corpo', valor: cafe.value.corpo },
    { nome: 'Finalização', valor: cafe.value.finalizacao },
  ]
})
</script>

<template>
  <div v-if="cafe" class="detalhes">
    <div class="detalhes-topo">
      <div>
        <p class="label">Detalhes</p>
        <h2>{{ cafe.nome }}</h2>
        <p class="produtor">{{ cafe.produtor }}</p>
      </div>
      <div class="nota-grande">{{ cafe.media.toFixed(1) }}</div>
    </div>

    <div class="grid-criterios">
      <div v-for="c in criterios" :key="c.nome" class="criterio">
        <span>{{ c.nome }}</span>
        <strong>{{ c.valor.toFixed(1) }}</strong>
      </div>
    </div>

    <div class="grid-info">
      <div class="bloco">
        <h3>Observações</h3>
        <p>{{ cafe.observacoes }}</p>
      </div>
      <div class="bloco">
        <h3>Informações</h3>
        <p><strong>Avaliador:</strong> {{ cafe.avaliador }}</p>
        <p><strong>Data:</strong> {{ cafe.data }}</p>
        <p><strong>Média:</strong> {{ cafe.media.toFixed(1) }}</p>
      </div>
    </div>

    <RouterLink class="voltar" to="/ranking">← Voltar ao ranking</RouterLink>
  </div>

  <div v-else class="detalhes vazio">
    <h2>Café não encontrado</h2>
    <p>Essa avaliação não existe ou foi removida.</p>
    <RouterLink class="voltar" to="/ranking">← Voltar ao ranking</RouterLink>
  </div>
</template>

<style scoped>
.detalhes { background: white; border: 1px solid #dcc9b0; border-radius: 10px; padding: 1.2rem; }
.detalhes-topo { display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
.detalhes-topo h2 { margin: 0.2rem 0; color: #2f2118; }
.label { margin: 0; text-transform: uppercase; font-size: 0.7rem; color: #7b5c47; letter-spacing: 0.1em; }
.produtor { margin: 0; color: #72543a; font-size: 0.9rem; }
.nota-grande { background: #6f4e37; color: white; padding: 0.5rem 0.7rem; border-radius: 6px; font-weight: 600; }
.grid-criterios { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 0.5rem; margin: 1rem 0; }
.criterio { background: #fffaf4; border: 1px solid #ead9bf; border-radius: 6px; padding: 0.5rem; }
.criterio span { display: block; color: #7d654f; font-size: 0.8rem; margin-bottom: 0.2rem; }
.criterio strong { color: #2f2118; }
.grid-info { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 0.8rem; }
.bloco { background: #fcf7ef; border-radius: 6px; padding: 0.8rem; }
.bloco h3 { margin: 0 0 0.3rem; color: #2f2118; font-size: 0.9rem; }
.bloco p { margin: 0.2rem 0; color: #5c4330; font-size: 0.85rem; }
.voltar { color: #6f4e37; font-weight: 600; font-size: 0.85rem; }
.vazio { text-align: center; }
@media (max-width: 760px) { .grid-info { grid-template-columns: 1fr; } }
</style>
