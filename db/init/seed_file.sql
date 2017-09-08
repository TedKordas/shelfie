DROP TABLE IF EXISTS shelfa;
DROP TABLE IF EXISTS shelfb;
DROP TABLE IF EXISTS shelfc;
DROP TABLE IF EXISTS shelfd;

CREATE TABLE IF NOT EXISTS shelfa (
  binId SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL
);
CREATE TABLE IF NOT EXISTS shelfb (
  binId SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL
);
CREATE TABLE IF NOT EXISTS shelfc (
  binId SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL
);
CREATE TABLE IF NOT EXISTS shelfd (
  binId SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL
);

INSERT INTO shelfa
(name, price)
VALUES
('Sally', 34),
('Harry', 23),
('Jane', 22 ),
('Danny', 34);

INSERT INTO shelfb
(name, price)
VALUES
('Sally', 34),
('Harry', 23),
('Jane', 22 ),
('Danny', 34);

INSERT INTO shelfc
(name, price)
VALUES
('Sally', 34),
('Harry', 23),
('Jane', 22 ),
('Danny', 34);

INSERT INTO shelfd
(name, price)
VALUES
('Sally', 34),
('Harry', 23),
('Jane', 22 ),
('Danny', 34);