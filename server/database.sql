CREATE DATABASE razborkawork;
CREATE TABLE ebaytab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50),
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count_ebay VARCHAR(300),
    price_ebay VARCHAR(300),
    price_store VARCHAR(300),
    count_store VARCHAR(10),
    link VARCHAR(300),
    image VARCHAR(300),
    datetime VARCHAR(300)
    );

-- CREATE DATABASE work;
-- CREATE TABLE ebaytab(
--     id SERIAL NOT NULL PRIMARY KEY,
--     model VARCHAR(50),
--     country VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     oem VARCHAR(100) NOT NULL,
--     count_ebay INTEGER,
--     price_ebay DECIMAL(8,2),
--     price_store DECIMAL(8,2),
--     count_store VARCHAR(10),
--     link VARCHAR(300),
--     image VARCHAR(300)
--     );



-- CREATE DATABASE perntodo;
--
-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255),
--     completed boolean
-- );
--
-- ALTER TABLE todo
-- ADD COLUMN completed BOOLEAN DEFAULT FALSE;
