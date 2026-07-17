<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow">Coffee Quality Challenge 2026</p>
        <h1>Squad Colmeia</h1>
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
      <p>Projeto escolar para avaliação de cafés.</p>
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
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(111, 78, 55, 0.15);
  backdrop-filter: blur(10px);
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #7b5c47;
}

h1 {
  margin: 0.25rem 0 0;
  font-size: 1.4rem;
  color: #2f2118;
}

.main-nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.main-nav a {
  color: #4f3423;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
}

.main-nav a.router-link-active {
  background: #6f4e37;
  color: white;
}

.main-content {
  flex: 1;
  padding: 2rem 1.5rem 3rem;
}

.footer {
  padding: 1rem 1.5rem 1.5rem;
  text-align: center;
  color: #72543a;
  font-size: 0.95rem;
}

@media (max-width: 700px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-content {
    padding: 1.25rem 1rem 2rem;
  }
}
</style>
