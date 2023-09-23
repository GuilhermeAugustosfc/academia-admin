export function getMonth() {
  const dataAtual = new Date()

  // Obter o número do mês (0 a 11)
  const numeroDoMes = dataAtual.getMonth()

  // Array com nomes dos meses em português
  const nomesDosMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  // Obter o nome do mês atual
  const nomeDoMesAtual = nomesDosMeses[numeroDoMes]

  return nomeDoMesAtual
}
