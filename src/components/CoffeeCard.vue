<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  cafe: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ props.cafe.nome }}</h3>
      <span class="nota-badge">{{ props.cafe.media.toFixed(1) }}</span>
    </div>

    <p class="produtor">{{ props.cafe.produtor }}</p>

    <div class="notas-grid">
      <div class="item">
        <span>Aroma</span>
        <strong>{{ props.cafe.aroma.toFixed(1) }}</strong>
      </div>
      <div class="item">
        <span>Sabor</span>
        <strong>{{ props.cafe.sabor.toFixed(1) }}</strong>
      </div>
      <div class="item">
        <span>Acidez</span>
        <strong>{{ props.cafe.acidez.toFixed(1) }}</strong>
      </div>
      <div class="item">
        <span>Corpo</span>
        <strong>{{ props.cafe.corpo.toFixed(1) }}</strong>
      </div>
      <div class="item full">
        <span>Finalização</span>
        <strong>{{ props.cafe.finalizacao.toFixed(1) }}</strong>
      </div>
    </div>

    <div class="card-footer">
      <span>{{ props.cafe.data }}</span>
      <RouterLink :to="{ name: 'detalhes', params: { id: props.cafe.id } }">Detalhes</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fffaf4; border: 1px solid #e7d4b4; border-radius: 10px; padding: 0.8rem;
  display: flex; flex-direction: column; gap: 0.5rem;
}
.card-header { display: flex; justify-content: space-between; align-items: center; }
.card-header h3 { margin: 0; color: #2f2118; font-size: 0.95rem; }
.nota-badge { background: #6f4e37; color: white; padding: 0.2rem 0.5rem; border-radius: 5px; font-weight: 600; font-size: 0.8rem; }
.produtor { margin: 0; color: #77553f; font-size: 0.85rem; }
.notas-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.3rem; }
.item { background: white; padding: 0.3rem; border-radius: 5px; border: 1px solid #efe0c8; }
.item.full { grid-column: 1 / -1; }
.item span { display: block; color: #8a6b4f; font-size: 0.7rem; }
.item strong { color: #2f2118; font-size: 0.85rem; }
.card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.card-footer span { color: #8d6d4b; font-size: 0.8rem; }
.card-footer a { color: #6f4e37; font-weight: 600; font-size: 0.8rem; }
</style>
