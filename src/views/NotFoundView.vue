<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="notfound">
    <h2>Página não encontrada</h2>
    <p>Essa rota não existe. Volte para a home.</p>
    <RouterLink class="voltar" to="/">← Voltar para home</RouterLink>
  </div>
</template>

<style scoped>
.notfound {
  background: white; border: 1px solid #dcc9b0; border-radius: 10px; padding: 2rem; text-align: center;
}
h2 { color: #2f2118; }
p { color: #5c4330; font-size: 0.9rem; }
.voltar { display: inline-block; margin-top: 0.5rem; color: #6f4e37; font-weight: 600; }
</style>
