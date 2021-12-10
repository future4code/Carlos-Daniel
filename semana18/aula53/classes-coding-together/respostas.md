### HERANÇA

### Exercício 01

A) Sim, seria possível através dos getters

B) Apareceu uma vez

### Exercício 02

A)Foi impressa 1 vez

B) Foi impressa 2 vezes por causa do próprio user e do extends

### Exercício 03

A)Não seria possível pelo fato do password ser privado, seria possível apenas dos getters

### POLIMORFISMO

### Exercício 01

A)Consegui imprimir name, registrationNumber e consumedEnergy
Não foi possível imprimir o método calculateBill, isso aconteceu porque ele é um método
e não um atributo

### Exercício 02

A) O typescript falou que não é possível criar uma instância de uma classe abstrata

B) Poderíamos usar a herança, ou seja, as classes abstratas irão armazenar atributos e métodos comuns às classes que a irão herdar, permitindo um maior reaproveitamento de código.

### Exercício 03

1. Poderíamos usar a herança, ou seja, as classes abstratas irão armazenar atributos e métodos comuns às classes que a irão herdar, permitindo um maior reaproveitamento de código.

2. Porque a interface é como se fosse um contrato de tipos que precisam ser seguidos. E o
   place, é abstrata porque serve para prover para que as classes herdeiras dela não precisem
   se preocupar com o comportamento padrão, apenas com suas características e comportamentos pessoais

3. Porque ele dita quais regras precisam ser seguidas, ele obriga as classes herdeiras a seguiremen seus métodos e ela não permite a instanciação de novos objetos com base em uma classe abstrata

### Exercício 04

Propriedades: name,registrationNumber,consumedEnergy, cpf, residentsQuantity, cep
Métdodos: getCpf e calculateBill

### Exercício 05

Semelhanças: Ambas implementam a interface client, usam o método calculateBill e a sintaxe
de ambas as classes são parecidas

Diferenças: O critério para calcular o calculateBill muda em cada uma e são filhas de pais diferentes. Um pega o CNPJ e o outro, o CPF

### Exercício 06

A) Deve ser filha da Industry porque é lá que tem as propriedades necessárias
para a criação da classe como a machinesQuantity

B) Implementa a Interface Client porque nela tem os dados básicos que precisamos como name,registrationNumber e consumedEnergy

C) Para que sejam exibidas as informações privadas
