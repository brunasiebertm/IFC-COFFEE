<script setup>
import { computed, ref } from 'vue'
import { avaliacoes, adicionarAvaliacao } from '@/store.js'
import RatingForm from '@/components/RatingForm.vue'
import CoffeeCard from '@/components/CoffeeCard.vue'

const mensagem = ref({
  tipo: 'info',
  texto: 'Cadastre uma avaliação para começar.',
})

const cafesOrdenados = computed(() => {
  const lista = []
  for (let i = 0; i < avaliacoes.value.length; i++) {
    lista.push(avaliacoes.value[i])
  }
  return lista.sort((a, b) => b.id - a.id)
})

function quandoSalvar(dados) {
  const resultado = adicionarAvaliacao(dados)
  if (resultado.success) {
    mensagem.value = { tipo: 'success', texto: resultado.message }
  } else {
    mensagem.value = { tipo: 'error', texto: resultado.message }
  }
}

function quandoErro(texto) {
  mensagem.value = { tipo: 'error', texto }
}
</script>

<template>
  <div class="container">
    <div class="card-topo">
      <h2>Avaliações</h2>
      <p>Cadastre notas e veja os cafés registrados.</p>
    </div>

    <div class="secao-form">
      <RatingForm @salvar="quandoSalvar" @erro="quandoErro" />
      <p :class="['msg', mensagem.tipo]">{{ mensagem.texto }}</p>
    </div>

    <div class="secao-lista">
      <div class="lista-topo">
        <h3>Cafés cadastrados</h3>
        <p>{{ cafesOrdenados.length }} avaliação(ões)</p>
      </div>

      <p v-if="cafesOrdenados.length === 0" class="vazio">
        Nenhum café avaliado ainda.
      </p>

      <div v-else class="grid-cards">
        <CoffeeCard v-for="cafe in cafesOrdenados" :key="cafe.id" :cafe="cafe" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container { display: flex; flex-direction: column; gap: 1rem; }
.card-topo, .secao-form, .secao-lista {
  background: white; border: 1px solid #dcc9b0; border-radius: 10px; padding: 1rem;
}
.card-topo h2 { margin: 0; color: #2f2118; font-size: 1.1rem; }
.card-topo p { margin: 0.3rem 0 0; color: #5f4634; font-size: 0.9rem; }
.msg { margin-top: 0.5rem; font-weight: 600; font-size: 0.85rem; }
.msg.success { color: #2d6a4f; }
.msg.error { color: #b42318; }
.msg.info { color: #6f4e37; }
.lista-topo { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; }
.lista-topo h3 { margin: 0; color: #2f2118; font-size: 1rem; }
.lista-topo p { margin: 0; color: #77553f; font-size: 0.85rem; }
.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem; }
.vazio { color: #6c4f3e; font-style: italic; font-size: 0.9rem; }
</style>
