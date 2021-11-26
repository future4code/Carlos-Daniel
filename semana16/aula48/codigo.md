### Exercício 01

B)
CREATE TABLE rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY(movie_id) REFERENCES Movie(id)
);

INSERT INTO rating (id, comment, rate, movie_id) VALUES ("001", "Bom", 6.5,"002");

D) ALTER TABLE Movie DROP COLUMN rating;

### Exercício 02

INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
"003",
"002");

### Exercício 03

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
