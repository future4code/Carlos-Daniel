// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}
console.log(soma(5,8))

// EXERCÍCIO 0B
function imprimirMensagem() {
  const mensagem = prompt("Digite uma mensagem: ") 
  return mensagem
 }
  console.log(imprimirMensagem())

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calcularAreaRetangulo(altura, largura) {
  return altura*largura
}
console.log(calcularAreaRetangulo(5,4))

// EXERCÍCIO 02
function imprimirIdade(anoAtual, anoNascimento) {
  return anoAtual-anoNascimento  
}
imprimirIdade(2021,2000)

// EXERCÍCIO 03
function calcularImc(peso, altura) {
  return peso / (altura * altura)
}
calcularImc(80,1.85)

// EXERCÍCIO 04
function imprimirInformacoesUsuario(nome, idade, email) {
  return (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
}
console.log(imprimirInformacoesUsuario("Carlos Daniel", 21, "carlosdaniel44u@gmail.com"))

// EXERCÍCIO 05
function imprimirTresCoresFavoritas(cor1, cor2, cor3) {
cor1 = "azul"
cor2 = "roxo"
cor3 = "vermelho"
  return [cor1, cor2, cor3]
}
console.log(imprimirTresCoresFavoritas([]))
  
// EXERCÍCIO 06
function retornarStringMaiuscula(string) {
  return string.toUpperCase()
}
retornarStringMaiuscula(prompt("Digite uma frase: "))

// EXERCÍCIO 07
function calcularIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}
calcularIngressosEspetaculo(3000,100)

// EXERCÍCIO 08
function checarStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
checarStringsMesmoTamanho("teste","igual")

// EXERCÍCIO 09
function retornarPrimeiroElemento(array) {
  return array[0]
}
retornarPrimeiroElemento([2,5,8,3])

// EXERCÍCIO 10
function retornarUltimoElemento(array) {
  return array[array.length-1]
}
retornarUltimoElemento([5,6,3,8,1])

// EXERCÍCIO 11
function trocarPrimeiroEultimo(array) {
  const indice = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = indice

  return array
}
trocarPrimeiroEultimo([5,8,2,6,4])

// EXERCÍCIO 12
function checarIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase() === string2.toLowerCase())
}
checarIgualdadeDesconsiderandoCase("BATATA","batata")

// EXERCÍCIO 13
function checarRenovacaoRG(anoAtual,anoNascimento, anoEmissaoRg) {
anoAtual = Number(prompt("Digite o ano atual: "))
anoNascimento = Number(prompt("Digite seu ano de nascimento: "))
anoEmissaoRg = Number(prompt("Digite o ano em que seu RG foi emitido: "))

idade = anoAtual-anoNascimento
tempoRenovacao = anoAtual-anoEmissaoRg

const criterio1 = idade <= 20 && tempoRenovacao >= 5
const criterio2 = idade <= idade > 20 && idade <= 50
const criterio3 = idade >= 50 && tempoRenovacao >= 15

RenovacaoCarteira = criterio1 || criterio2 || criterio3
console.log(RenovacaoCarteira)
}
checarRenovacaoRG()

// EXERCÍCIO 14
function checarAnoBissexto(ano,primeiroAnoBissexto,segundoAnoBissexto) {
    primeiroAnoBissexto(ano % 400===0)
    segundoAnoBissexto(ano % 4===0) && (ano % 100 !== 0 || ano % 400 === 0)
    return (primeiroAnoBissexto) || (segundoAnoBissexto)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maiorIdade, formacao, horario) {
    maiorIdade = prompt("Você tem mais de 18 anos? sim/não") 
    formacao = prompt("Você possui ensino médio completo? sim/não")
    horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim/não")

    inscricaoValida = (maiorIdade === sim && formacao === sim && horario===sim)
    return maiorIdade || formacao || horario
}
console.log(checaValidadeInscricaoLabenu())

