// Interpretação de Código

// 1) O código está em um laço for, que é dividido em:
// começo, condição de continuação, incremento e por fim, ação repetida
// Irá aparecer noo console o número 10

// 2) 
// a) Será impresso os números maiores que 18:
// (19,21,23,25,27,30)

//b) É suficiente pois é muito viável usar ele em arrays 
// Para acessar o índice, podemos atribuir uma let valor of array 
// e usar o if posteriormente 

// 3) Iria aparecer:   *
//                    **
//                    ***
//                    ****
//                    3


// Escrita de código

//1) 
let petsUsuario = Number(prompt("Digite quantos bichinhos você tem"))
const contagemPets = []
if (petsUsuario === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

for(let i=0; i<petsUsuario;i++) {
    nomePets = prompt("Digite o nome deles: ")
    contagemPets.push(nomePets)
}
console.log(contagemPets)


//Exercício  02)
//a)
const meuArr = [8,12,26,36,13,18,17,26,59,68,32]

for(numero of meuArr)
console.log(numero)

//b)

for(numero of meuArr)
console.log(numero/10)

//c)

const arrayPares = []
for(i=0; i<meuArr.length; i++) {
    if(meuArr[i] % 2 === 0) {
        arrayPares.push(meuArarray[i])
    }
}
console.log(arrayPares)

//d)

const novoArray =[]
for(elemento of novoArray)
console.log(`O elemento do index ${i} é ${elemento}`)

//e)

let menorNum = 0
let maiorNum = meuArr[0]

for(numero of meuArr){
    if(numero>maiorNum) {
        maiorNum=numero
    }
}

for (numero of meuArr) {
    if(numero<menorNum){
        menorNum = numero
    }


}
console.log(`O maior número é ${maiorNum} e o menor número é ${menorNum}`)