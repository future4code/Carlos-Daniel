### Exercício 01

a) Eu acredito que o uso de strings é uma forma melhor, pois ela apresenta menos vulnerabilidades, o id não seria exposto nas URLs e isso gera mais segurança para o usuário.
Concordo porque ela não depende do método do banco de dados (sempre incrementar +1) e pela sua composição: 36 caracteres hexadecimais exibidos em 5 grupos separados por hífen.

### Exercício 02

a) Primeiramente, o código conecta o mysql com nossos códigos através da ferramenta Knex. Já a função createUser é responsável por criar um usuário (como o próprio nome já diz). Para que esse usuário seja criado, os seguintes parâmetros serão necessários: id, email e senha.

b) CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL
);

### Exercício 03

a) Ela "tipa" a key como string. Porque é mais viável e seguro tipar a chave como string

### Exercício 07

a) Ela "tipa" o resultado como any, ou seja, pode vir como qualquer dado
