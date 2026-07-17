<script setup>
import { computed, ref } from 'vue'
import { avaliacoes, adicionarAvaliacao } from '@/store.js'
import RatingForm from '@/components/RatingForm.vue'
import CoffeeCard from '@/components/CoffeeCard.vue'

const feedback = ref({
  type: 'info',
  message: 'Cadastre uma nova avaliação para alimentar o campeonato.',
})

const cafesOrdenados = computed(() => [...avaliacoes.value].sort((a, b) => b.id - a.id))

const lidarComSalvar = (payload) => {
  const resultado = adicionarAvaliacao(payload)

  feedback.value = resultado.success
    ? { type: 'success', message: resultado.message }
    : { type: 'error', message: resultado.message }
}

const lidarComErro = (message) => {
  feedback.value = { type: 'error', message }
}
</script>

<template>
  <main class="avaliacoes-container">
    <section class="intro-card">
      <div>
        <p class="eyebrow">Avaliações</p>
        <h2>Cadastre novas notas e acompanhe os cafés registrados.</h2>
      </div>
    </section>

    <section class="form-section">
      <RatingForm @salvar="lidarComSalvar" @erro="lidarComErro" />
      <p :class="['feedback', feedback.type]">{{ feedback.message }}</p>
    </section>

    <section class="list-section">
      <div class="list-header">
        <h3>Cafés cadastrados</h3>
        <p>{{ cafesOrdenados.length }} avaliações no total</p>
      </div>

      <p v-if="cafesOrdenados.length === 0" class="empty-state">
        Nenhum café foi avaliado ainda. Use o formulário acima para começar.
      </p>

      <div v-else class="cards-grid">
        <CoffeeCard v-for="cafe in cafesOrdenados" :key="cafe.id" :cafe="cafe" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.avaliacoes-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.intro-card,
.form-section,
.list-section {
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

.feedback {
  margin-top: 0.8rem;
  font-weight: 600;
}

.feedback.success {
  color: #2d6a4f;
}

.feedback.error {
  color: #b42318;
}

.feedback.info {
  color: #6f4e37;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.list-header h3 {
  margin: 0;
  color: #2f2118;
}

.list-header p {
  margin: 0;
  color: #77553f;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.empty-state {
  color: #6c4f3e;
  font-style: italic;
}

@media (max-width: 700px) {
  .list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
}
</style>
