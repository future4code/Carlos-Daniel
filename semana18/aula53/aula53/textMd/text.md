Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

Por fim, ela é abstrata por um motivo simples. O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles. Então não há motivos para querermos instanciar um objeto do tipo Place porque, no nosso contexto, todos os casos deles já estão cobertos por outras classes. Isso responde à terceira pergunta: Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

### Método find

O primeiro passo da sua implementação é achar o usuário salvo com esse registrationNumber. Para isso, podemos usar o método find. Ele funciona como o filter - recebe um callback que, por sua vez, deve retornar um boolean- mas, ao invés de retornar um array (como o filter), devolve um único elemento. Como o número de registro é único de cada cliente, o find é uma opção melhor.
