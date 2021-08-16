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
calcularAreaRetangulo(5,4)

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
imprimirInformacoesUsuario("Carlos Daniel", 21, "carlosdaniel44u@gmail.com")

// EXERCÍCIO 05
function imprimirTresCoresFavoritas(cor1, cor2, cor3) {
cor1 = "azul"
cor2 = "roxo"
cor3 = "vermelho"
  return [cor1, cor2, cor3]
}
imprimirTresCoresFavoritas([])
  
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
retornarPrimeiroElemento([])

// EXERCÍCIO 10
function retornarUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocarPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checarIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checarRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checarAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checarValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}