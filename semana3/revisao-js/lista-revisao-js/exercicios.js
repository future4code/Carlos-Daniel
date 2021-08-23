











// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

retornaTamanhoArray([5,4,2,8,3])

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

retornaArrayInvertido([8,23,16,10])

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort()
}

retornaArrayOrdenado([3, 2, 1, 4, 7])

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0)
    return numerosPares
}

retornaNumerosPares([1, 2, 3, 4, 5, 6])

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}











// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maior = Math.max(...array)
    return maior 
   }
   
retornaMaiorNumero([1, 5, 3, 7, 5, 2])

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}





// Exercícios em aula - Revisão JS
// Exercício 01 - Variáveis
const nomeDoProduto = prompt("Insira o nome do produto: ")
let precoDoProduto = Number(prompt("Insira o preço do produto: "))
precoDoProduto = Number(precoDoProduto -1)

console.log(`O produto ${nomeDoProduto} custa ${precoDoProduto} reais`)

// Exercício 01 - Operadores
const primeiroNumero = Number(prompt("Insira o primeiro número"))
const segundoNumero = Number(prompt("Insira o segundo número"))

console.log("Soma: ", primeiroNumero + segundoNumero)
console.log("Subtração: ", primeiroNumero - segundoNumero)
console.log("Multiplicação: ", primeiroNumero * segundoNumero)
console.log("Divisão: ", primeiroNumero / segundoNumero)
console.log("Resto: ", primeiroNumero % segundoNumero)

//Exercício 01 - Comparadores
const numeroSorteado = Math.floor(Math .random() * 10) + 1
const numeroUsuario = Number(prompt("Insira um número de 1 a 10"))

console.log(`O número sorteado foi: ${numeroSorteado}`)

if(numeroUsuario>numeroSorteado) {
    console.log("O número do usuário é maior")
} else if (numeroUsuario<numeroSorteado)
console.log("O número sorteado é maior")
else {
console.log("Os números são iguais")
}

//Exercício 01 - Operadores Lógicos
const idade = Number(prompt("Digite sua idade"))
const altura = Number((prompt("Digite sua altura em cm")))
const problemasCardiacos = prompt("Você tem algum problema cardíaco? S/N")

if(idade >= 18 && altura >160 && problemasCardiacos === "N"){
    console.log("Pode entrar")
} else {
    console.log("Entrada proibida")
}

//Exercício 01 - Strings
const frase = "Hoje eu vou comer cenoura, ebaaa"

console.log(frase, frase.length)
console.log(frase.trim(), frase.length)
console.log(frase.toLowerCase())
console.log("Tem a palavra batata?", frase.includes("batata"))
console.log("Tem a palavra cenoura?", frase.includes("cenoura"))

const novaFrase = frase.replaceAll("cenoura","batata")
console.log("Tem a palavra comer?", novaFrase.includes("comer"))
console.log("Tem a palavra batata?",novaFrase.includes("batata"))

//Exercício 01 - Arrays
const listaDeCompras = ["batata", "cenoura", "beterraba"]

console.log(listaDeCompras[1])
console.log("Tamanho da Lista: ", listaDeCompras.length)
listaDeCompras.push("mandioca")
console.log(listaDeCompras)
console.log("Tem cenoura?",listaDeCompras.includes("cenoura"))

listaDeCompras.splice(1,1)
console.log(listaDeCompras)

//Exercício 01 - Funções
const array = [5,4,6,9,2]

const dividirDoisNumeros = (arrayDeNumeros) => {
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    
    return arrayDeNumeros
}

dividirDoisNumeros(array)

//Exercício 01 - Objetos
const pessoa = {nome: "Carlos", idade: 21, generoMusicalFavorito: "indie"}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} e gosta muito de 
${pessoa.generoMusicalFavorito}`)

const novaPessoa = {...pessoa, nome: "Kleber"}
console.log(novaPessoa)

//Exercício 01 - Condicionais
const numeroUsuario = Number(prompt("Digite um número"))

if(numeroUsuario % 2 ===0) {
    console.log("É par")
}else {
    console.log("É ímpar")
}

//Exercício 02 - Condicionais
let nomeInserido = (prompt("Insira o nome de um animal: "))
switch(nomeInserido) {
    case "Cachorro":
        console.log("Au au")
        break
    case "Gato":
        console.log("Miau")
        break
    case "Vaca":
        console.log("Muuu")
        break
    default:
        console.log("Sem barulho reconhecido")
        break
}

//Exercício 01 - laços (for)
const array = [11,15,18,14,12,13]
let maior = 0

for(let i = 0; i < array.length; i++) {
    if(array[i] > maior){
        maior = array[i]
    }
}

console.log(`O maior número é ${maior}`)

//Exercício 02 - laços (for...of)
//numero = numeros[i]
const numeros = [11,15,18,14,12,13,50]
let maior = 0

for(let numero of numeros){
    if(numero>maior) {
        maior = numero
    }
}

console.log(`O maior número é ${maior}`)

//Exercício 03 - laços
const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
    nome: "Polly",
    especie: "cachorrinha",
    raca: "Lhasa Apso",
    snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
   }

const verificarAula = (aula) => {
    if(aula){
        return "Dou" 
    } else{
        return "Não dou"
    }    
}

const aulasFront = verificarAula(prof.aulasFront)
const aulasBack = verificarAula(prof.aulasBack)

const jogos = []

for(let i = 1; i <= prof.jogosFavoritos.length; i++)
jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`) 

const frase = (`Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
${aulasFront} aulas de front e ${aulasBack} aulas de back.
Meus jogos favoritos são: ${jogos}
Tenho uma ${prof.pet.especie} chamada ${prof.pet.snacksFavoritos[1]}`)

console.log(frase)

prof.contaPiada()









