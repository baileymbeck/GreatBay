DROP DATABASE IF EXIST greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE greatbay (
    id INT (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR (48) NOT NULL,
    category VARCHAR (50) NOT NULL,
    bid INT (12) NOT NULL DEFAULT 0;
)
