-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE DATABASE
USE ecommerce_db;

-- DROP TABLES
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS product_tags;

-- CREATE TABLES
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  stock INT NOT NULL DEFAULT 0,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id)
    REFERENCES categories(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tags (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product_tags (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id)
    REFERENCES products(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (tag_id)
    REFERENCES tags(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- INSERT DATA
INSERT INTO categories (name)
VALUES ('Electronics'),
       ('Food'),
       ('Clothing');

INSERT INTO products (name, price, stock, category_id)



INSERT INTO tags (name)
VALUES ('Electronics'),
       ('Food'),
       ('Clothing');

INSERT INTO product_tags (product_id, tag_id)
VALUES (1, 1),
       (2, 2),
       (3, 3);

-- SELECT DATA
SELECT * FROM products;
SELECT * FROM categories;
SELECT * FROM tags;
SELECT * FROM product_tags;
