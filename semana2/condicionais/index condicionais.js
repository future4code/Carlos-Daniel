//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
//1)
//a) O código testa a paridade do número digitado 
//b) Ele imprime números pares
//c) Imprime números ímpares

//2)
//a) O código serve para que o usuário escolha uma fruta e tenha
//noção de quanto é o preço dela 

//b) "O preço da fruta  Maçã  é  R$  2.25"
//c) A mensagem seria "O preço da fruta  Pêra  é  R$  5"


//3)
//a) A primeira linha está pedindo para o usuário digitar um número

//b) Se o usuário digitou o número 10, a mensagem seria: Esse número
// passou no teste e se fosse -10 não apareceria nada

//c) Ocorrerá um erro pois a variável mensagem está em outro bloco 
// de código, onde o console.log não tem acesso 

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//Exercício 01

const perguntarIdade = () => {
    idadeUsuario = Number(prompt("Digite sua idade: "))
    
if (idadeUsuario >= 18){
        console.log("Você pode dirigir")
} else {(idadeUsuario < 18)
        console.log("Você não pode dirigir")

    }
}

perguntarIdade() 

//Exercício 02

const verificarTurnoAluno = (M,V,N) => {

    if (turnoEstudado === "M") {
        console.log("Bom dia!")
    } else if (turnoEstudado === "V") {
        console.log("Boa tarde!")
    } else if (turnoEstudado === "N") {
        console.log("Boa noite!")
    } else {
        console.log("Digite um turno válido")
    }
}

turnoEstudado = prompt("Digite M para Matutino,V para Vespertino e N para Noturno").toUpperCase()

verificarTurnoAluno()

//Exercício 03

let turnoUsuario = prompt("Digite M para Matutino,V para Vespertino e N para Noturno").toUpperCase()
switch (turnoUsuario) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break 
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite um turno válido")
        break
}
    
//Exercício 04

const assistirFilme = (cond1, cond2) => {
    const generoFantasia = prompt("Qual gênero você irá assistir?")
    const abaixoQuinzeReais = Number(prompt("Qual é o preço do ingresso?"))
    
    
    if (generoFantasia === "fantasia" && abaixoQuinzeReais <15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

}

assistirFilme()









