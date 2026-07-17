import { ref } from 'vue'

export const avaliacoes = ref([
  { id: 1, nome: 'Café Bourbon Amarelo', produtor: 'Sítio Primavera', aroma: 9, sabor: 8.5, acidez: 8, corpo: 8.5, media: 8.5 },
  { id: 2, nome: 'Café Geisha', produtor: 'Fazenda Vista Alegre', aroma: 9.5, sabor: 9.8, acidez: 9, corpo: 9, media: 9.33 }
])

export function adicionarAvaliacao(novoCafe) {
  const soma = Number(novoCafe.aroma) + Number(novoCafe.sabor) + Number(novoCafe.acidez) + Number(novoCafe.corpo)
  const media = Number((soma / 4).toFixed(2))

  avaliacoes.value.push({
    id: Date.now(),
    nome: novoCafe.nome,
    produtor: novoCafe.produtor,
    aroma: Number(novoCafe.aroma),
    sabor: Number(novoCafe.sabor),
    acidez: Number(novoCafe.acidez),
    corpo: Number(novoCafe.corpo),
    media: media
  })
}