
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}

console.log(checarIgualdade(2,2))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a,b) {
    return `No comparador de verificar maior ${a} > ${b} é ${a>b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= False
// b-) 1=='1'= True 
// c-) 'a'==='b'= False
// d-) 'b'>'a'= True
// e-) 0!==null= True 


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    let usuario = []

    const nomeUsuario = prompt("Digite seu nome completo: ")
    const anoNascimento = Number(prompt("Digite seu ano de Nascimento: "))
    const senhaUsuario = prompt("Insira sua senha aqui(obs: mín 6 caracteres)")
    const nacionalidadeUsuario = prompt("Digite sua nacionalidade: ")

    const idade = 2021 - anoNascimento

    if(idade>= 18 && senhaUsuario.length >=6 && nacionalidadeUsuario === "Brasileira") {
        usuario = [nomeUsuario, anoNascimento, senhaUsuario, nacionalidadeUsuario]
    } else {
        console.log("Cadastro inválido")
    }

    return usuario
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    const senhaCadastrada = 123456
    const senhaUsuario = Number(prompt("Digite sua senha: "))
    if(senhaUsuario === senhaCadastrada ){
        console.log("Usuário Logado")
    } else {
        console.log("Senha inválida")
    }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

        //  Sua lógica aqui
const nomeUsuario = prompt("Digite seu nome: ")
const vacinaTomada = prompt("Digite o nome da vacina tomada: ")
let tempo 
let data 

if(vacinaTomada === "Coronavac") {
    tempo = 28
    data = "29/09/2021"

} else if (vacinaTomada === "Astrazenica") {
    tempo = 90
    data ="01/12/2021"

} else if (vacinaTomada === "Pfizer") {
    tempo = 90
    data ="01/12/2021"

}else { 
}

return `Olá ${nomeUsuario}! A próxima dose da ${vacinaTomada}
é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}

    console.log(primeiraDose())

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const pessoaImunizada = usuarios.filter((pessoa) => {
        if(pessoa.nome === nomeDoUsuario) {
            pessoa.imunizacao = "Completa"
            return pessoa 
        }
    })
    return pessoaImunizada
}

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    //  Sua lógica aqui

    const naoImunizados = usuarios.filter((pessoa)=>{
        if(pessoa.imunizacao === "incompleta") {
            return pessoa 

        }

    })

    const listaPessoasNaoImunizadas = naoImunizados.map((pessoa)=>{
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    })

    return listaPessoasNaoImunizadas

}
    
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());