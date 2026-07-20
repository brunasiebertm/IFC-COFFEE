import { computed, ref } from 'vue'

const chaveStorage = 'conexao-cafe-avaliacoes'

const dadosIniciais = [
  {
    id: 1,
    nome: 'Marco',
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
    nome: 'Geisha',
    produtor: 'Fazenda Vista Alegre',
    aroma: 9.5,
    sabor: 9.8,
    acidez: 9,
    corpo: 9,
    finalizacao: 9.3,
    media: 9.1,
    observacoes: 'Perfil floral e excelente final longo.',
    avaliador: 'Bruna',
    data: '10/07/2026',
  },
  {
    id: 3,
    nome: 'Alex',
    produtor: 'Fazenda Bela Vista',
    aroma: 9,
    sabor: 8.5,
    acidez: 9,
    corpo: 9.5,
    finalizacao: 8.3,
    media: 9.5,
    observacoes: 'Perfil adocicado e excelente final.',
    avaliador: 'Carlos',
    data: '9/07/2026',
  },
  {
    id: 4,
    nome: 'Rosa',
    produtor: 'Campo Largo',
    aroma: 9,
    sabor: 8.9,
    acidez: 9.7,
    corpo: 9,
    finalizacao: 8.3,
    media: 9.3,
    observacoes: 'Perfil saboroso.',
    avaliador: 'Bruna',
    data: '10/07/2026',
  },
  {
    id: 5,
    nome: 'Ana',
    produtor: 'Fazenda Vista Alegre',
    aroma: 9.5,
    sabor: 9.8,
    acidez: 9,
    corpo: 9,
    finalizacao: 9.3,
    media: 9.2,
    observacoes: 'Perfil floral e excelente final longo.',
    avaliador: 'Bruna',
    data: '10/07/2026',
  },
  {
    id: 6,
    nome: 'Lucas',
    produtor: 'Fazenda Campo Verde',
    aroma: 8.9,
    sabor: 10,
    acidez: 9,
    corpo: 8.5,
    finalizacao: 9.3,
    media: 9.4,
    observacoes: 'Perfil amargo e finalização no ponto.',
    avaliador: 'Rafa',
    data: '11/07/2026',
  },
  {
    id: 7,
    nome: 'Vanessa',
    produtor: 'Campo alegre',
    aroma: 8.5,
    sabor: 9,
    acidez: 9.3,
    corpo: 9,
    finalizacao: 9,
    media: 9.4,
    observacoes: 'Perfil floral e excelente final leve.',
    avaliador: 'Carlos',
    data: '11/07/2026',
  },
  {
    id: 8,
    nome: 'Felipe',
    produtor: 'Boa Vista',
    aroma: 8.9,
    sabor: 9,
    acidez: 9.7,
    corpo: 8,
    finalizacao: 9.3,
    media: 9.1,
    observacoes: 'Agradável e equilibrado.',
    avaliador: 'Bruna',
    data: '10/07/2026',
  },
]

function carregarAvaliacoes() {
  if (typeof window === 'undefined') return dadosIniciais

  const salvo = window.localStorage.getItem(chaveStorage)
  if (!salvo) return dadosIniciais

  try {
    const convertido = JSON.parse(salvo)
    return Array.isArray(convertido) ? convertido : dadosIniciais
  } catch {
    return dadosIniciais
  }
}

export const avaliacoes = ref(carregarAvaliacoes())

function salvarNoStorage() {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(chaveStorage, JSON.stringify(avaliacoes.value))
  }
}

export const totalAvaliacoes = computed(() => avaliacoes.value.length)

export const melhorNota = computed(() => {
  if (avaliacoes.value.length === 0) return null
  let maior = 0
  for (let i = 0; i < avaliacoes.value.length; i++) {
    if (avaliacoes.value[i].media > maior) {
      maior = avaliacoes.value[i].media
    }
  }
  return maior
})

export const ultimaAvaliacao = computed(() => {
  if (avaliacoes.value.length === 0) return null
  return avaliacoes.value[0]
})

export function adicionarAvaliacao(nova) {
  if (!nova.nome || !nova.produtor) {
    return { success: false, message: 'Nome do café e produtor são obrigatórios.' }
  }

  const notas = []
  for (let i = 0; i < 5; i++) {
    const chaves = ['aroma', 'sabor', 'acidez', 'corpo', 'finalizacao']
    notas.push(Number(nova[chaves[i]]))
  }

  for (let i = 0; i < notas.length; i++) {
    if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
      return { success: false, message: 'Todas as notas devem estar entre 0 e 10.' }
    }
  }

  let soma = 0
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
  }
  const media = Number((soma / notas.length).toFixed(1))

  const registro = {
    id: Date.now(),
    nome: nova.nome.trim(),
    produtor: nova.produtor.trim(),
    aroma: Number(nova.aroma),
    sabor: Number(nova.sabor),
    acidez: Number(nova.acidez),
    corpo: Number(nova.corpo),
    finalizacao: Number(nova.finalizacao),
    media,
    observacoes: nova.observacoes || 'Sem observações.',
    avaliador: nova.avaliador || 'Equipe Colmeia',
    data: nova.data || new Date().toLocaleDateString('pt-BR'),
  }

  avaliacoes.value = [registro, ...avaliacoes.value]
  salvarNoStorage()

  return { success: true, message: 'Avaliação cadastrada com sucesso!' }
}
