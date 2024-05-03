
DROP DATABASE IF EXISTS craigslist_db;

CREATE DATABASE craigslist_db;
\c craigslist_db;

CREATE TABLE regions (
id SERIAL PRIMARY KEY,
region_name TEXT NOT NULL,
time_zone TEXT
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(15) UNIQUE NOT NULL,
password VARCHAR(20) NOT NULL
);


CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR (20) NOT NULL,
content TEXT NOT NULL,
posted_by VARCHAR(15) REFERENCES users(username) ON DELETE SET NULL,
category TEXT NOT NULL,
location TEXT NOT NULL,
region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE
);

CREATE TABLE users_pref_reg(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, region_id)
);

CREATE TABLE users_posts (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, post_id)
);

--Regions
---
--id PK SERIAL
--region_name TEXT
--time_zone TEXT
--
--Users
---
--id PK SERIAL
--username VARCHAR(15) UNIQUE
--password VARCHAR(20)
--
--Posts
---
--id PK SERIAL
--title VARCHAR(20)
--content TEXT
--posted_by FK - Users
--category TEXT
--location TEXT
--region_id FK - Regions
--
--Users_pref_reg
---
--user_id PK FK - Users
--region_id PK FK - Regions
--
--Users_posts
---
--user_id PK FK - Users
--post_id PK FK - Posts