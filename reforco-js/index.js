//EXERCÍCIO 0A
//Escreva uma função que recebe dois números e retorna a soma deles.
calculaSoma= (num1,num2) => {
    const soma= num1+num2
    return soma
}

calculaSoma(40,5)

//EXERCÍCIO 0B
//Escreva uma função que pede ao usuário uma mensagem
// e a imprime no console.
imprimirMensagem = (mensagemUsuario) => {
    const mensagem = prompt("Digite uma mensagem: ")
    console.log(mensagem)
}

imprimirMensagem()

//Exercício 01
// Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo 
//e imprime no console a área do retângulo
calcularArea = (base,altura) => {
    const area = base*altura
    console.log(area)
}

calcularArea(5,4)

//Exercício 02
//Escreva uma função que pede ao usuário o ano atual 
// e seu ano de nascimento
//e imprima no console sua idade
calcularIdade = (anoAtualUsuario,anoNascimentoUsuario) => {
    const anoAtual= Number(prompt("Digite o ano atual:"))
    const anoNascimento= Number(prompt("Digite seu ano de nascimento:"))
    const idade = anoAtual- anoNascimento
    console.log(idade)
}

calcularIdade()

//Exercício03
//Escreva uma função que recebe o peso em kg
//e a altura em metros de uma pessoa
//e retorna o seu IMC (Índice de Massa Corpórea).
calcularImc = (pesoUsuario,alturaUsuario) => {
    const peso = Number(prompt("Qual é o seu peso?"))
    const altura = Number(prompt("Qual é a sua altura?"))
    const imc = peso / (altura*altura)

    return imc
}

calcularImc()

//Exercício04
//Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem), 
//e imprime no console uma mensagem como a seguinte:
//Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
imprimirInformacoes = (nomeUsuario,idadeUsuario, emailUsuario) => {
    const nome = prompt("Digite seu nome: ")
    const idade = Number(prompt("Digite sua idade: "))
    const email = prompt("Digite seu e-mail")
    const frase = (`Meu sone é ${nome}, tenho ${idade} anos
    e o meu email é ${email}`)

    console.log(frase)
}

imprimirInformacoes()

//Exercício05
//Escreva uma função que pergunta ao usuário suas três cores favoritas 
//e imprime no console um array que contenha essas três cores.
coresFavoritas = (priCor,segCor,terCor) => {
    const cor1 = prompt("Primeira cor favorita: ")
    const cor2 = prompt("Segunda cor favorita: ")
    const cor3 = prompt("Terceira cor favorita: ")

    console.log([cor1, cor2, cor3])
}

coresFavoritas()

//Exercício06
//Escreva uma função que recebe uma string
//e retorna ela em letra maiúscula.
retornarMaiuscula = (frase) => {
    return frase.toUpperCase()
}

retornarMaiuscula("hey")

//Exercício07
//Escreva uma função que recebe o custo de um espetáculo de teatro 
//e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) 
//e retorna quantos ingressos precisam ser vendidos
//para que o espetáculo não dê prejuízo.
apurarResultadoTeatro = (custoTeatro,valorIngresso) => {
    return custoTeatro/valorIngresso
}

apurarResultadoTeatro(5500,50)

//Exercício08
//Escreva uma função que recebe duas strings
//e retorna um booleano (true ou false) 
//indicando se elas possuem o mesmo tamanho.
retornarBooleano =(string1,string2) => {
    return string1.length === string2.length
}

retornarBooleano("Java","Script")

//Exercício09
//Escreva uma função que recebe um array 
//e retorna o primeiro elemento.
retornarPrimeiroElementoArr = (array) => {
    return array[0]
}

retornarPrimeiroElementoArr([3,4,5,6,8])

//Exercício10
//Escreva uma função que recebe um array
// e retorna o último elemento.

retornarUltimoElementoArr = (array) => {
    return array[array.length-1]
}

retornarUltimoElementoArr([3,4,5,6,8])

//Exercício11
//Escreva uma função que recebe um array com o primeiro e ultimo
//elemento trocados
trocarPrimeiroEUltimoElementos = (array) => {
    const indice = array[0]
    array[0] = array[array.length-1]
    array[array.length-1] = indice
    return array
}

trocarPrimeiroEUltimoElementos([1, 2, 3, 4, 5])

//Exercício12
//Escreva uma função que recebe duas strings e retorna um booleano
//indicando se elas são iguais,
//desconsiderando letras maiúsculas ou minúsculas.
retornarIgualdadeStrings = (string1,string2) => {
    return string1.localeCompare() === string2.localeCompare()
}

retornarIgualdadeStrings("OLA","ola")

////DESAFIOS////

//Exercício13
checarRenovacaoCarteira = (anoAtualUsuario,anoNascimentoUsuario, anoEmissaoRg) => {
const anoAtual = Number(prompt("Digite o ano atual: "))
const anoNascimento = Number(prompt("Digite seu ano de nascimento: "))
const emissaoRg = Number(prompt("Digite o ano em que seu RG foi emitido: "))

idade = anoAtual-anoNascimento
tempoRenovacao = anoAtual-emissaoRg

const criterio1 = idade <= 20 && tempoRenovacao >= 5
const criterio2 = idade <= idade > 20 && idade <= 50 
const criterio3 = idade >= 50 && tempoRenovacao >= 15

RenovacaoCarteira = criterio1 || criterio2 || criterio3
console.log(RenovacaoCarteira)
}

checarRenovacaoCarteira()

//Exercício14
checarAnoBissexto = (ano,primeiroAnoBissexto,segundoAnoBissexto) => {
    primeiroAnoBissexto(ano % 400===0)
    segundoAnoBissexto(ano % 4===0) && (ano % 100 !== 0 || ano % 400 === 0)
    return (primeiroAnoBissexto) || (segundoAnoBissexto)
}

//Exercício15
checaValidadeInscricao = (maiorIdade, formacao, horario) => {
maiorIdade = prompt("Você tem mais de 18 anos? sim/não") 
formacao = prompt("Você possui ensino médio completo? sim/não")
horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim/não")

const inscricaoValida = (maiorIdade === "sim" && formacao === "sim" && horario==="sim")
return inscricaoValida
}

checaValidadeInscricao()