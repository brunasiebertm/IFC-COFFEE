<script setup>
import { computed, reactive } from 'vue'

const emit = defineEmits(['salvar', 'erro'])

const cafeForm = reactive({
  nome: '',
  produtor: '',
  aroma: 5,
  sabor: 5,
  acidez: 5,
  corpo: 5,
  finalizacao: 5,
  observacoes: '',
  avaliador: '',
})

const previsaoMedia = computed(() => {
  const notas = [
    cafeForm.aroma,
    cafeForm.sabor,
    cafeForm.acidez,
    cafeForm.corpo,
    cafeForm.finalizacao,
  ]
  let soma = 0
  for (let i = 0; i < notas.length; i++) {
    soma += Number(notas[i])
  }
  return Number((soma / notas.length).toFixed(1))
})

function limparForm() {
  cafeForm.nome = ''
  cafeForm.produtor = ''
  cafeForm.aroma = 5
  cafeForm.sabor = 5
  cafeForm.acidez = 5
  cafeForm.corpo = 5
  cafeForm.finalizacao = 5
  cafeForm.observacoes = ''
  cafeForm.avaliador = ''
}

function enviar() {
  if (!cafeForm.nome || !cafeForm.produtor) {
    emit('erro', 'Nome do café e produtor são obrigatórios.')
    return
  }
  emit('salvar', { ...cafeForm })
  limparForm()
}
</script>

<template>
  <form @submit.prevent="enviar" class="formulario">
    <div class="form-topo">
      <h3>Nova avaliação</h3>
      <p>Média: {{ previsaoMedia.toFixed(1) }}</p>
    </div>

    <div class="campo">
      <label for="nome">Nome do café</label>
      <input id="nome" v-model="cafeForm.nome" type="text" placeholder="Ex: Bourbon Amarelo" />
    </div>

    <div class="campo">
      <label for="produtor">Produtor</label>
      <input id="produtor" v-model="cafeForm.produtor" type="text" placeholder="Ex: Sítio Primavera" />
    </div>

    <div class="campo">
      <label for="avaliador">Avaliador</label>
      <input id="avaliador" v-model="cafeForm.avaliador" type="text" placeholder="Ex: Ana" />
    </div>

    <div class="grid-notas">
      <div class="nota-campo">
        <label for="aroma">Aroma</label>
        <input id="aroma" v-model.number="cafeForm.aroma" type="number" min="0" max="10" step="0.5" />
      </div>
      <div class="nota-campo">
        <label for="sabor">Sabor</label>
        <input id="sabor" v-model.number="cafeForm.sabor" type="number" min="0" max="10" step="0.5" />
      </div>
      <div class="nota-campo">
        <label for="acidez">Acidez</label>
        <input id="acidez" v-model.number="cafeForm.acidez" type="number" min="0" max="10" step="0.5" />
      </div>
      <div class="nota-campo">
        <label for="corpo">Corpo</label>
        <input id="corpo" v-model.number="cafeForm.corpo" type="number" min="0" max="10" step="0.5" />
      </div>
      <div class="nota-campo">
        <label for="finalizacao">Finalização</label>
        <input id="finalizacao" v-model.number="cafeForm.finalizacao" type="number" min="0" max="10" step="0.5" />
      </div>
    </div>

    <div class="campo">
      <label for="observacoes">Observações</label>
      <textarea id="observacoes" v-model="cafeForm.observacoes" rows="2" placeholder="Descreva o café."></textarea>
    </div>

    <button type="submit">Salvar avaliação</button>
  </form>
</template>

<style scoped>
.formulario {
  background: #fcf7ef; border: 1px solid #e8d7bd; border-radius: 10px; padding: 1rem;
}
.form-topo { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; }
.form-topo h3 { margin: 0; color: #2f2118; }
.form-topo p { margin: 0; color: #6f4e37; font-weight: 600; }
.campo { margin-bottom: 0.8rem; }
.campo label { display: block; margin-bottom: 0.3rem; font-weight: 600; color: #4e3425; font-size: 0.9rem; }
.campo input, .campo textarea {
  width: 100%; padding: 0.5rem; border: 1px solid #d7c1a1; border-radius: 6px; font: inherit; box-sizing: border-box;
}
.grid-notas { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-bottom: 0.8rem; }
.nota-campo { background: white; padding: 0.5rem; border-radius: 6px; border: 1px solid #e9dabe; }
.nota-campo label { display: block; margin-bottom: 0.2rem; color: #4f3423; font-weight: 600; font-size: 0.85rem; }
.nota-campo input { width: 100%; padding: 0.3rem; border: 1px solid #d7c1a1; border-radius: 4px; }
button { width: 100%; padding: 0.6rem; border: 0; border-radius: 6px; background: #6f4e37; color: white; font-weight: 600; cursor: pointer; }
button:hover { background: #533827; }
@media (max-width: 700px) { .grid-notas { grid-template-columns: 1fr; } }
</style>
