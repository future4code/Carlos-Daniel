//1)
//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece? Ocorre um erro no código
var myString = "ABC";
//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
var myNumber = 5;
//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
var person = {
    name: "Carlão",
    age: 21,
    favoriteColor: "Azul"
};
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
// D) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
var RainbowClass;
(function (RainbowClass) {
    RainbowClass["ORANGE"] = "Orange";
    RainbowClass["RED"] = "Red";
    RainbowClass["PURPLE"] = "Purple";
    RainbowClass["YELLOW"] = "Yellow";
    RainbowClass["GREEN"] = "Green";
})(RainbowClass || (RainbowClass = {}));
var firstPerson = {
    name: "Lucas",
    age: 29,
    favoriteColor: RainbowClass.YELLOW
};
var secondPerson = {
    name: "Pablo",
    age: 32,
    favoriteColor: RainbowClass.GREEN
};
var thirdPerson = {
    name: "João",
    age: 56,
    favoriteColor: RainbowClass.YELLOW
};
