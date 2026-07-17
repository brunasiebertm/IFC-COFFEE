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
  <article class="coffee-card">
    <div class="card-header">
      <h3>{{ props.cafe.nome }}</h3>
      <span class="score-pill">{{ props.cafe.media.toFixed(1) }}</span>
    </div>

    <p class="producer">{{ props.cafe.produtor }}</p>

    <div class="notes-grid">
      <div class="note-item">
        <span>Aroma</span>
        <strong>{{ props.cafe.aroma.toFixed(1) }}</strong>
      </div>
      <div class="note-item">
        <span>Sabor</span>
        <strong>{{ props.cafe.sabor.toFixed(1) }}</strong>
      </div>
      <div class="note-item">
        <span>Acidez</span>
        <strong>{{ props.cafe.acidez.toFixed(1) }}</strong>
      </div>
      <div class="note-item">
        <span>Corpo</span>
        <strong>{{ props.cafe.corpo.toFixed(1) }}</strong>
      </div>
      <div class="note-item full">
        <span>Finalização</span>
        <strong>{{ props.cafe.finalizacao.toFixed(1) }}</strong>
      </div>
    </div>

    <div class="card-footer">
      <p>{{ props.cafe.data }}</p>
      <RouterLink :to="{ name: 'detalhes', params: { id: props.cafe.id } }"
        >Ver detalhes</RouterLink
      >
    </div>
  </article>
</template>

<style scoped>
.coffee-card {
  background: #fffaf4;
  border: 1px solid #e7d4b4;
  border-radius: 18px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  color: #2f2118;
}

.score-pill {
  background: #6f4e37;
  color: white;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

.producer {
  margin: 0;
  color: #77553f;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.note-item {
  background: white;
  padding: 0.55rem;
  border-radius: 12px;
  border: 1px solid #efe0c8;
}

.note-item.full {
  grid-column: 1 / -1;
}

.note-item span {
  display: block;
  color: #8a6b4f;
  font-size: 0.8rem;
}

.note-item strong {
  color: #2f2118;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  margin-top: auto;
}

.card-footer p {
  margin: 0;
  color: #8d6d4b;
}

.card-footer a {
  color: #6f4e37;
  font-weight: 700;
}
</style>
