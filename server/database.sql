-- CREATE DATABASE razborka;
-- one-to-one
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL,
    oem_id BIGINT,
    FOREIGN KEY (oem_id) REFERENCES manual (id)
    );
CREATE TABLE manual(
    id SERIAL NOT NULL PRIMARY KEY,
    model  VARCHAR(300),
    device VARCHAR(170) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );

-- one-to-many
CREATE TABLE categories(
    id SERIAL NOT NULL PRIMARY KEY,
    name_site  VARCHAR(30) NOT NULL
    );
CREATE TABLE sitepost(
    id SERIAL NOT NULL PRIMARY KEY,
    oem VARCHAR(300) NOT NULL,
    price INT,
    sitepost_id BIGINT REFERENCES categories(id)
    );

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);
create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);
