/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")
const somarCartas = (carta1, carta2) => {
   let soma = carta1.valor + carta2.valor
   return soma
} 

if(confirm("Quer iniciar uma nova rodada?")) {
const primeiraCartaUsuario = comprarCarta()
const segundaCartaUsuario = comprarCarta()
const somaCartasUsuario = somarCartas(primeiraCartaUsuario, segundaCartaUsuario)
const primeiraCartaComputador = comprarCarta()
const segundaCartaComputador = comprarCarta()
const somaCartasComputador = somarCartas(primeiraCartaComputador, segundaCartaComputador)

console.log(`Usúario - cartas: ${primeiraCartaUsuario.texto} - ${segundaCartaUsuario.texto} - Pontuação ${somaCartasUsuario}`)
console.log(`Computador - cartas: ${primeiraCartaComputador.texto} - ${segundaCartaComputador.texto} - Pontuação ${somaCartasComputador}`)

if(somaCartasUsuario === somaCartasComputador){
   console.log("Empate!")
}
else if(somaCartasUsuario>somaCartasComputador){
   console.log("O Usuário ganhou")
} else{
   console.log("Empate")
}
      
}
 else {
   "O jogo acabou"
}



