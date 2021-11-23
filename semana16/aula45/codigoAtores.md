USE `maryam-carlos-daniel`;

-- Exercício 01
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"João",
600000,
"1974-10-21",
"male"
);

INSERT INTO Actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);

-- Criando mais dois atores
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

-- EXERCÍCIO 03
SELECT \* FROM Actor;

SELECT id, name FROM Actor WHERE gender = "female";

SELECT id, name FROM Actor WHERE gender = "male";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT gender FROM Actor WHERE gender = "invalid";

SELECT id, name, salary FROM Actor WHERE salary <= 500000;

SELECT id, name FROM Actor WHERE id = "002";

-- Exercício 04

SELECT \* FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT \* FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT \* FROM Actor WHERE name LIKE "%g%";

SELECT \* FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
