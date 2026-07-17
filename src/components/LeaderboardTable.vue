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
  <div class="tabela-card">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Café</th>
          <th>Produtor</th>
          <th>Nota</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cafe, i) in cafes" :key="cafe.id" :class="{ top3: i < 3 }">
          <td>{{ i + 1 }}º</td>
          <td>{{ cafe.nome }}</td>
          <td>{{ cafe.produtor }}</td>
          <td>{{ cafe.media.toFixed(1) }}</td>
          <td>
            <RouterLink :to="{ name: 'detalhes', params: { id: cafe.id } }">Ver</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tabela-card {
  background: white; border: 1px solid #dcc9b0; border-radius: 10px; padding: 0.8rem; overflow-x: auto;
}
table { width: 100%; border-collapse: collapse; }
th, td { text-align: left; padding: 0.5rem; border-bottom: 1px solid #efe1c9; font-size: 0.85rem; }
th { color: #6f4e37; font-size: 0.8rem; }
.top3 { background: #fff8ee; }
a { color: #6f4e37; font-weight: 600; font-size: 0.85rem; }
</style>
