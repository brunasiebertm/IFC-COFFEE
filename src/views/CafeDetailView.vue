<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { avaliacoes } from '@/store.js'

const route = useRoute()

const cafe = computed(() => {
  const id = Number(route.params.id)
  return avaliacoes.value.find((item) => item.id === id) || null
})

const criterios = computed(() => {
  if (!cafe.value) {
    return []
  }

  return [
    { label: 'Aroma', valor: cafe.value.aroma },
    { label: 'Sabor', valor: cafe.value.sabor },
    { label: 'Acidez', valor: cafe.value.acidez },
    { label: 'Corpo', valor: cafe.value.corpo },
    { label: 'Finalização', valor: cafe.value.finalizacao },
  ]
})
</script>

<template>
  <section v-if="cafe" class="detail-card">
    <div class="detail-header">
      <div>
        <p class="eyebrow">Detalhes da avaliação</p>
        <h2>{{ cafe.nome }}</h2>
        <p class="producer">{{ cafe.produtor }}</p>
      </div>

      <div class="score-chip">{{ cafe.media.toFixed(1) }} / 10</div>
    </div>

    <div class="criteria-grid">
      <article v-for="criterio in criterios" :key="criterio.label" class="criterion-card">
        <span>{{ criterio.label }}</span>
        <strong>{{ criterio.valor.toFixed(1) }}</strong>
      </article>
    </div>

    <div class="info-grid">
      <article>
        <h3>Observações</h3>
        <p>{{ cafe.observacoes }}</p>
      </article>

      <article>
        <h3>Infos adicionais</h3>
        <ul>
          <li><strong>Avaliador:</strong> {{ cafe.avaliador }}</li>
          <li><strong>Data:</strong> {{ cafe.data }}</li>
          <li><strong>Média final:</strong> {{ cafe.media.toFixed(1) }}</li>
        </ul>
      </article>
    </div>

    <RouterLink class="back-link" to="/ranking">Voltar ao ranking</RouterLink>
  </section>

  <section v-else class="detail-card empty-state">
    <h2>Café não encontrado</h2>
    <p>A avaliação solicitada não existe ou foi removida.</p>
    <RouterLink class="back-link" to="/ranking">Voltar ao ranking</RouterLink>
  </section>
</template>

<style scoped>
.detail-card {
  background: white;
  border: 1px solid rgba(111, 78, 55, 0.15);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 40px rgba(47, 33, 24, 0.06);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.detail-header h2 {
  margin: 0.2rem 0;
  color: #2f2118;
}

.producer {
  margin: 0;
  color: #72543a;
}

.score-chip {
  background: #6f4e37;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  font-size: 1.05rem;
  font-weight: 700;
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.85rem;
  margin: 1.25rem 0;
}

.criterion-card {
  background: #fffaf4;
  border: 1px solid #ead9bf;
  border-radius: 16px;
  padding: 0.9rem;
}

.criterion-card span {
  display: block;
  color: #7d654f;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.criterion-card strong {
  color: #2f2118;
  font-size: 1.05rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-grid article {
  background: #fcf7ef;
  border-radius: 18px;
  padding: 1rem;
}

.info-grid h3 {
  margin-top: 0;
  color: #2f2118;
}

.info-grid ul {
  padding-left: 1rem;
  color: #5c4330;
  line-height: 1.7;
}

.back-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #6f4e37;
  font-weight: 700;
}

.empty-state {
  text-align: center;
}

@media (max-width: 760px) {
  .detail-header,
  .info-grid {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
}
</style>
