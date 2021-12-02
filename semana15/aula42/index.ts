//1)
//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece? Ocorre um erro no código
const myString: string = "ABC";

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
let myNumber: string | number = 5;

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.
const person: { name: string; age: number; favoriteColor: string } = {
  name: "Carlão",
  age: 21,
  favoriteColor: "Azul",
};

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// D) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

enum RainbowClass {
  ORANGE = "Orange",
  RED = "Red",
  PURPLE = "Purple",
  YELLOW = "Yellow",
  GREEN = "Green",
}
type Person = {
  name: string;
  age: number;
  favoriteColor: RainbowClass;
};
const firstPerson: Person = {
  name: "Lucas",
  age: 29,
  favoriteColor: RainbowClass.YELLOW,
};

const secondPerson: Person = {
  name: "Pablo",
  age: 32,
  favoriteColor: RainbowClass.GREEN,
};

const thirdPerson: Person = {
  name: "João",
  age: 56,
  favoriteColor: RainbowClass.YELLOW,
};

//2) Observe a função a seguir, escrita em JavaScript:
type Estatisticas = {
  maior: number;
  menor: number;
  media: number;
};
function obterEstatisticas(numeros: number[]): Estatisticas {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
// c) Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
type AmostraDeIdades = {
  numeros: number[];
  obterEstatisticas: (number: number[]) => Estatisticas;
};

const amostraDeIdades: AmostraDeIdades = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas,
};

//3) Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

// Observe o seguinte array de posts:

// a) Copie o código acima para um arquivo .ts. Depois, crie um *type* para representar um post e utilize-o para fazer a tipagem do array posts.
type Post = {
  autor: string;
  texto: string;
};

const posts: Post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}
