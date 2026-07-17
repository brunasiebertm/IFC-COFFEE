<script setup>
import { avaliacoes, adicionarAvaliacao } from '@/store.js'
import RatingForm from '@/components/RatingForm.vue'
import CoffeeCard from '@/components/CoffeeCard.vue'
</script>

<template>
  <main class="avaliacoes-container">
    <h2>Avaliação de Cafés</h2>
    
    <section class="form-section">
      <RatingForm @salvar="adicionarAvaliacao" />
    </section>

    <hr />

    <section class="list-section">
      <h3>Cafés Cadastrados</h3>
      
      <p v-if="avaliacoes.length === 0" class="empty-state">
        Nenhum café foi avaliado ainda. Use o formulário acima para começar!
      </p>

      <div v-else class="cards-grid">
        <CoffeeCard 
          v-for="cafe in avaliacoes" 
          :key="cafe.id" 
          :cafe="cafe" 
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.avaliacoes-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.form-section {
  margin-bottom: 30px;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.empty-state {
  color: #666;
  font-style: italic;
}
</style>