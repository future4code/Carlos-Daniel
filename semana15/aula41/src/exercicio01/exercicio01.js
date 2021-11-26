const colors = require("colors");

const username = process.argv[2];
const age = Number(process.argv[3]);

const params = process.argv.length - 2;

if (params < 2) {
  console.log(`Esperava 2 parâmetros só recebi ${params}`.red);
}

console.log(`Olá, ${username}! Você tem ${age} anos.`.blue);

console.log(
  `Olá, ${username}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`
    .green
);
