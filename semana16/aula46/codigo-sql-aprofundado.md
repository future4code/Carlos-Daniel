### Exercício 01

D)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 02

A)UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003"

B)UPDATE Actor
SET name = "JULIANA PAES"
WHERE name= "Juliana Paes";

C)UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender="male"
WHERE id="005";

### Exercício 03

A)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

B)DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 04

A)SELECT MAX(salary) FROM Actor;

B)SELECT MIN(salary) FROM Actor WHERE gender = "female";

C)SELECT Count(\*) FROM Actor WHERE gender = "female";

D)SELECT SUM(salary) FROM Actor;

### Exercício 05

B)SELECT id, name FROM Actor ORDER BY name DESC;

C)SELECT \* FROM Actor ORDER BY salary;

D)SELECT \* FROM Actor ORDER BY salary DESC limit 3;

E)SELECT AVG(salary) FROM Actor GROUP BY gender;

### Exercício 06

A)ALTER TABLE Movie ADD playing_limit_date DATE;

B)ALTER TABLE Movie CHANGE rating rating FLOAT;

C)UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2022-01-15" WHERE id = "002";

D)DELETE FROM Movie WHERE id = "003";

### Exercício 07

A)SELECT COUNT(\*) FROM Movie WHERE rating > 7.5;

B)SELECT AVG(rating) FROM Movie;

C)SELECT COUNT(\*) FROM Movie WHERE playing_limit_date > CURDATE();

D)SELECT COUNT(\*) FROM Movie WHERE release_date > CURDATE();

E)SELECT MAX(rating) FROM Movie;

F)SELECT MIN(rating) FROM Movie;

### Exercício 08

A)SELECT \* FROM Movie ORDER BY title ASC;

B)SELECT \* FROM Movie ORDER BY title DESC LIMIT 5;

C)SELECT \* FROM Movie WHERE release_Date < CURDATE() ORDER BY release_date DESC LIMIT 3;

D)SELECT \* FROM Movie ORDER BY rating DESC LIMIT 3;
