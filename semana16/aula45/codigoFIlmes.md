USE `maryam-carlos-daniel`;

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);

### Exercício 05

INSERT INTO Movie(id, title, synopsis, release_Date,rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Movie(id, title, synopsis, release_Date,rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Movie(id, title, synopsis, release_Date,rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
que só quer saber de farras e jogatina nas boates.
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);

### Exercício 06

SELECT id, title, rating FROM Movie WHERE id > 5-4;

SELECT \* FROM Movie WHERE title = "Deus é brasileiro";

SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

### Exercício 07

SELECT \* FROM Movie WHERE title LIKE "%vida%";

SELECT \* FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%"

SELECT \* FROM Movie WHERE release_Date < "2021-11-22";

SELECT \* FROM Movie WHERE release_Date < "2021-11-22" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7
