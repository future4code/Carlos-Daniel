// simplificação do arrow
//tira os () se for receber só um parametro 
//e tira as chaves e o return se só tiver o return






// Interpretação

//1) Será impresso um novo array baseando os nomes, índices e array
// no original.

//2) Vai ser impresso um novo array com os nomes das instrutoras.

//3) Vai ser impresso um novo array excluindo o apelido "Chijo"


// Parte escrita

//Exercício 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//A
const apenasNomesDogs = pets.map(pets => pets.nome)
 console.log(apenasNomesDogs)

//B
const apenasCachorroSalsicha = pets.filter(pets => pets.raca ==="Salsicha")
console.log(apenasCachorroSalsicha)

//C
const racaPoodle = pets.filter (pets => pets.raca === "Poodle")
const descontoPoodle = racaPoodle.map(pet => console.log(`Você ganhou um 
cupom de desconto de 10% para tosar o/a ${pet.nome}`))

//Exercício 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const descontoProdutos = produtos.filter(produtos => produtos.preco -= 5/100)
 console.log(descontoProdutos)
 

//A
const apenasNomeProdutos = produtos.map(produtos => produtos.nome)
console.log(apenasNomeProdutos)

//B
const descontoProdutos = produtos.filter(produtos => produtos.preco -= 5/100)
console.log(descontoProdutos)

//C
const apenasBebidas = produtos.filter (produtos => produtos.categoria === "Bebidas")
console.log(apenasBebidas)

//D
const objPalavraYpe = produtos.filter(produtos => produtos.nome.includes("Ypê"))
console.log(objPalavraYpe)

//E
const descontoYpe = produtos.filter(produtos => produtos.nome.includes("Ypê"))
const fraseProduto = descontoYpe.map(produto => console.log(`Compre ${produto.nome} 
por ${produto.preco}`))