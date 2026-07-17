<script setup>
import { computed, reactive } from 'vue'

const emit = defineEmits(['salvar', 'erro'])

const novoCafe = reactive({
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

const mediaPrevisao = computed(() => {
  const notas = [
    novoCafe.aroma,
    novoCafe.sabor,
    novoCafe.acidez,
    novoCafe.corpo,
    novoCafe.finalizacao,
  ]
  const soma = notas.reduce((total, nota) => total + Number(nota), 0)
  return Number((soma / notas.length).toFixed(1))
})

const resetarFormulario = () => {
  novoCafe.nome = ''
  novoCafe.produtor = ''
  novoCafe.aroma = 5
  novoCafe.sabor = 5
  novoCafe.acidez = 5
  novoCafe.corpo = 5
  novoCafe.finalizacao = 5
  novoCafe.observacoes = ''
  novoCafe.avaliador = ''
}

const enviarFormulario = () => {
  const nome = novoCafe.nome.trim()
  const produtor = novoCafe.produtor.trim()

  if (!nome || !produtor) {
    emit('erro', 'Nome do café e produtor são obrigatórios.')
    return
  }

  emit('salvar', { ...novoCafe, nome, produtor })
  resetarFormulario()
}
</script>

<template>
  <form @submit.prevent="enviarFormulario" class="rating-form">
    <div class="form-header">
      <h3>Nova avaliação</h3>
      <p>Média prevista: {{ mediaPrevisao.toFixed(1) }}</p>
    </div>

    <div class="input-group">
      <label for="nome">Nome do café</label>
      <input
        id="nome"
        v-model="novoCafe.nome"
        type="text"
        placeholder="Ex: Bourbon Amarelo"
        required
      />
    </div>

    <div class="input-group">
      <label for="produtor">Produtor</label>
      <input
        id="produtor"
        v-model="novoCafe.produtor"
        type="text"
        placeholder="Ex: Sítio Primavera"
        required
      />
    </div>

    <div class="input-group">
      <label for="avaliador">Avaliador</label>
      <input id="avaliador" v-model="novoCafe.avaliador" type="text" placeholder="Ex: Ana" />
    </div>

    <div class="score-grid">
      <div
        v-for="campo in ['aroma', 'sabor', 'acidez', 'corpo', 'finalizacao']"
        :key="campo"
        class="score-field"
      >
        <label :for="campo">{{ campo.charAt(0).toUpperCase() + campo.slice(1) }}</label>
        <input
          :id="campo"
          v-model.number="novoCafe[campo]"
          type="number"
          min="0"
          max="10"
          step="0.5"
          placeholder="0 a 10"
        />
      </div>
    </div>

    <div class="input-group">
      <label for="observacoes">Observações</label>
      <textarea
        id="observacoes"
        v-model="novoCafe.observacoes"
        rows="3"
        placeholder="Descreva o perfil sensorial do café."
      ></textarea>
    </div>

    <button type="submit">Salvar avaliação</button>
  </form>
</template>

<style scoped>
.rating-form {
  background: #fcf7ef;
  border: 1px solid #e8d7bd;
  border-radius: 18px;
  padding: 1.1rem;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.form-header h3 {
  margin: 0;
  color: #2f2118;
}

.form-header p {
  margin: 0;
  color: #6f4e37;
  font-weight: 700;
}

.input-group {
  margin-bottom: 0.9rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 700;
  color: #4e3425;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d7c1a1;
  border-radius: 12px;
  font: inherit;
  box-sizing: border-box;
}

.score-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.9rem;
}

.score-field {
  background: white;
  padding: 0.7rem;
  border-radius: 14px;
  border: 1px solid #e9dabe;
}

.score-field label {
  display: block;
  margin-bottom: 0.3rem;
  color: #4f3423;
  font-weight: 700;
}

.score-field input {
  width: 100%;
}

button {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 0;
  border-radius: 999px;
  background: #6f4e37;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background: #533827;
}

@media (max-width: 700px) {
  .score-grid {
    grid-template-columns: 1fr;
  }
}
</style>
