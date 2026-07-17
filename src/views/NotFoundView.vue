<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="not-found-card">
    <p class="eyebrow">Erro 404</p>
    <h2>Página não encontrada</h2>
    <p>A rota acessada não existe ou foi removida. Volte para a home e continue navegando.</p>
    <RouterLink class="back-link" to="/">Voltar para a home</RouterLink>
  </section>
</template>

<style scoped>
.not-found-card {
  background: white;
  border: 1px solid rgba(111, 78, 55, 0.15);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 18px 40px rgba(47, 33, 24, 0.06);
}

h2 {
  color: #2f2118;
}

p {
  color: #5c4330;
}

.back-link {
  display: inline-block;
  margin-top: 0.75rem;
  color: #6f4e37;
  font-weight: 700;
}
</style>
