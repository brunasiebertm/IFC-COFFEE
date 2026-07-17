<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow">Conexão Café</p>
        <h1>Avaliação de Cafés Especiais</h1>
      </div>

      <nav class="main-nav" aria-label="Navegação principal">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/avaliacoes">Avaliações</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>Conexão Café - Projeto escolar</p>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-bottom: 1px solid #dcc9b0;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  color: #7b5c47;
}

h1 {
  margin: 0.2rem 0 0;
  font-size: 1.2rem;
  color: #2f2118;
}

.main-nav {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.main-nav a {
  color: #4f3423;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.main-nav a.router-link-active {
  background: #6f4e37;
  color: white;
}

.main-content {
  flex: 1;
  padding: 1.5rem;
}

.footer {
  padding: 1rem 1.5rem;
  text-align: center;
  color: #72543a;
  font-size: 0.85rem;
}

@media (max-width: 700px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
