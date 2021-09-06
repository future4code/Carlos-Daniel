// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

//Segunda Resolução
let meuArray = [1,2,5,7,9,4]
console.log(meuArray)

let arrayInvertido = meuArray.map(function (item, indice, array) {
    return array[array.length-indice-1]
})

console.log(meuArray)
console.log(arrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort()
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0)
    return numerosPares
}

//Segunda Resolução 
function retornaNumerosPares(array) {
	let novoArray = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
	novoArray.push(array[i])
	}
}
	return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
	let novoArray = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i])
    }
}
	return novoArray
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    const maior = Math.max(...array)
    return maior
}

//Segunda Resolução
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for(let numero of array) {
        if(numero>maiorNumero) {
            maiorNumero=numero
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    const objeto = {
        maiorNumero: Math.max(num1,num2),
        maiorDivisivelporMenor: num1 % num2 === 0,
        diferenca: num1-num2
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = []
    for (let i = 0; primeirosPares.length < n; i += 2) {
        primeirosPares.push(i);
    }
    return primeirosPares
}

// EXERCÍCIO 09
function checaTriangulo(a, b, c) {
    if(a !== b && b !== c) {
        return'Escaleno'
    } else if(a === b && b === c) {
        return'Equilátero'
    } else {
        return'Isósceles'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const objFilme = {
        nome: "Ponte para Terabítia",
        ano: 2007,
        diretor: " Gábor Csupó",
        elenco: ["AnnaSophia Robb", "Josh Hutcherson", "Bailee Madison"]
    }

    const fraseFilme = (`Venha assistir ao filme ${objFilme.nome}, de ${objFilme.ano}, dirigido por ${objFilme.diretor} 
    e estrelado por ${objFilme.elenco}`)
    return fraseFilme 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
const objePessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
}

const novaPessoa = {...objePessoa,
    nome: "ANÔNIMO",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

return novaPessoa

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