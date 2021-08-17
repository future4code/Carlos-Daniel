/* 1) Será impresso no console da seguinte forma: Matheus Nachtergaele, Virginia Cavendish e 
{canal: "Globo", horario: "14h"} */ 


/* 2) a) No primeiro, será impresso: {nome: "Juca", idade: 3, raca: "SRD"}
      No segundo, será impresso: {nome: "Juba", idade: 3, raca: "SRD"}
      No terceiro, será impresso: {nome: "Jubo", idade: 3, raca: "SRD"}

      b) Ela faz um spread, ou seja, faz uma cópia */


/* 3) a) Irá ser impresso, respectivamente, false e undefined 
      b) O valor false foi impresso porque backender recebe false e na altura apareceu 
      undefined pois não teve nada definido. */


//Exercício 1 - Letra A 

const aluna = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function receberObjeto () {
    
}

receberObjeto(aluna)

console.log(`Eu sou ${aluna.nome}, mas pode me chamar de ${aluna.apelidos[0]},
${aluna.apelidos[1]} ou ${aluna.apelidos[2]}`)

// Exercício 1 - Letra B

const copiaAluna = {
    ...aluna,
    apelidos: ["Xuxu", "Mands","Mandis"]
}

function receberObjeto() {

}

console.log(`Eu sou ${aluna.nome}, mas pode me chamar de ${copiaAluna.apelidos[0]}, ${copiaAluna.apelidos[1]},
${copiaAluna.apelidos[2]}`)

receberObjeto(copiaAluna)

// Exercício 2 

const primeiroObjeto = {
    nome: "Carlos",
    idade: 21,
    profissao: "estudante" 
}

const segundoObjeto = {
    nome: "Gabriel", 
    idade: 23,
    profissao: "desenvolvedor web"

}

function retornarArray(primeiroObjeto, segundoObjeto) {
    primeiroArray = [primeiroObjeto.nome, primeiroObjeto.nome.length, primeiroObjeto.idade,
    primeiroObjeto.profissao, primeiroObjeto.profissao.length]
    segundoArray = [segundoObjeto.nome, segundoObjeto.nome.length, segundoObjeto.idade,
        segundoObjeto.profissao, segundoObjeto.profissao.length]

}

retornarArray(primeiroObjeto, segundoObjeto)
console.log(primeiroArray)
console.log(segundoArray)

// Exercício 3

const carrinho = []

const frutaUm = {
    nome: "Melância",
    disponibilidade: true

}

const frutaDois = {
    nome: "Morango",
    disponibilidade: true

}

const frutaTres = {
    nome: "Mamão",
    disponibilidade: true

}

function receberFruta() {
    return carrinho.push(frutaUm,frutaDois,frutaTres)

}

receberFruta(frutaUm,frutaDois,frutaTres)
console.log(carrinho)