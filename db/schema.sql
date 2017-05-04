CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INTEGER(3) auto_increment not null,
burger_name VARCHAR(60) not null,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);