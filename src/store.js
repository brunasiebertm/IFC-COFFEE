import { computed, ref } from 'vue'

const STORAGE_KEY = 'coffee-quality-challenge-2026'

const dadosIniciais = [
  {
    id: 1,
    nome: 'Café Bourbon Amarelo',
    produtor: 'Sítio Primavera',
    aroma: 9,
    sabor: 8.5,
    acidez: 8,
    corpo: 8.5,
    finalizacao: 8.5,
    media: 8.5,
    observacoes: 'Notas equilibradas com boa complexidade.',
    avaliador: 'Rafa',
    data: '14/07/2026',
  },
  {
    id: 2,
    nome: 'Café Geisha',
    produtor: 'Fazenda Vista Alegre',
    aroma: 9.5,
    sabor: 9.8,
    acidez: 9,
    corpo: 9,
    finalizacao: 9.3,
    media: 9.3,
    observacoes: 'Perfil floral e excelente final longo.',
    avaliador: 'Bruna',
    data: '10/07/2026',
  },
]

const carregarAvaliacoes = () => {
  if (typeof window === 'undefined') {
    return dadosIniciais
  }

  const armazenado = window.localStorage.getItem(STORAGE_KEY)

  if (!armazenado) {
    return dadosIniciais
  }

  try {
    const parsed = JSON.parse(armazenado)
    return Array.isArray(parsed) ? parsed : dadosIniciais
  } catch {
    return dadosIniciais
  }
}

export const avaliacoes = ref(carregarAvaliacoes())

const persistirAvaliacoes = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(avaliacoes.value))
  }
}

export const numeroDeAvaliacoes = computed(() => avaliacoes.value.length)
export const melhorNota = computed(() => {
  if (avaliacoes.value.length === 0) {
    return null
  }

  return Math.max(...avaliacoes.value.map((cafe) => cafe.media))
})
export const ultimaAvaliacao = computed(() => {
  if (avaliacoes.value.length === 0) {
    return null
  }

  return avaliacoes.value[0]
})

export function adicionarAvaliacao(novoCafe) {
  if (!novoCafe?.nome?.trim() || !novoCafe?.produtor?.trim()) {
    return { success: false, message: 'Nome do café e produtor são obrigatórios.' }
  }

  const notas = ['aroma', 'sabor', 'acidez', 'corpo', 'finalizacao'].map((chave) =>
    Number(novoCafe[chave]),
  )

  if (notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10)) {
    return { success: false, message: 'Todas as notas devem estar entre 0 e 10.' }
  }

  const media = Number((notas.reduce((soma, nota) => soma + nota, 0) / notas.length).toFixed(1))

  const registro = {
    id: Date.now(),
    nome: novoCafe.nome.trim(),
    produtor: novoCafe.produtor.trim(),
    aroma: Number(novoCafe.aroma),
    sabor: Number(novoCafe.sabor),
    acidez: Number(novoCafe.acidez),
    corpo: Number(novoCafe.corpo),
    finalizacao: Number(novoCafe.finalizacao),
    media,
    observacoes: novoCafe.observacoes?.trim() || 'Sem observações.',
    avaliador: novoCafe.avaliador?.trim() || 'Equipe Colmeia',
    data: novoCafe.data || new Date().toLocaleDateString('pt-BR'),
  }

  avaliacoes.value = [registro, ...avaliacoes.value]
  persistirAvaliacoes()

  return { success: true, message: 'Avaliação cadastrada com sucesso!' }
}
