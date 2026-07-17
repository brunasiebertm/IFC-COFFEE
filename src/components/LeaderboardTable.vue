<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  cafes: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="leaderboard-card">
    <table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Café</th>
          <th>Produtor</th>
          <th>Nota</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cafe, index) in cafes" :key="cafe.id" :class="{ topThree: index < 3 }">
          <td>#{{ index + 1 }}</td>
          <td>{{ cafe.nome }}</td>
          <td>{{ cafe.produtor }}</td>
          <td>{{ cafe.media.toFixed(1) }}</td>
          <td>
            <RouterLink :to="{ name: 'detalhes', params: { id: cafe.id } }">Detalhes</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.leaderboard-card {
  background: white;
  border: 1px solid rgba(111, 78, 55, 0.15);
  border-radius: 24px;
  padding: 1rem;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 0.75rem 0.6rem;
  border-bottom: 1px solid #efe1c9;
}

th {
  color: #6f4e37;
}

.topThree {
  background: #fff8ee;
}

a {
  color: #6f4e37;
  font-weight: 700;
}
</style>
