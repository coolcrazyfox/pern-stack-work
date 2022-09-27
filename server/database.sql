CREATE DATABASE razborkawork;
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL
    )
CREATE TABLE manualtab(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_id INTEGER REFERENCES oem(id),
    model  VARCHAR(300) NOT NULL,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(300) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE allsitetab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50),
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    analog_oem VARCHAR(300),
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE analogtab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    device VARCHAR(170) NOT NULL,
    analog_oem VARCHAR(100) NOT NULL,
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE ebaytab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE bampertab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE avitatab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE storetab(
    id SERIAL NOT NULL PRIMARY KEY,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)
    );



-- CREATE TABLE ebaytab(
--     id SERIAL NOT NULL PRIMARY KEY,
--     model VARCHAR(50),
--     country VARCHAR(50) DEFAULT Belarus,
--     device VARCHAR(170) NOT NULL,
--     oem VARCHAR(100) NOT NULL,
--     count_ebay VARCHAR(300),
--     price_ebay VARCHAR(300),
--     price_store VARCHAR(300),
--     count_store VARCHAR(10),
--     link VARCHAR(300),
--     image VARCHAR(300),
--     datetime VARCHAR(300)
-- );
