CREATE DATABASE razborkawork;
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL
    )
CREATE TABLE manualtab(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_id INTEGER,
    model  VARCHAR(300) NOT NULL,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(300) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (oem_id) REFERENCES oem(id)
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
CREATE TABLE namesite(
    id SERIAL NOT NULL PRIMARY KEY,
    name_site VARCHAR(50)
    );

-- CREATE TABLE analogtab(
--     id SERIAL NOT NULL PRIMARY KEY,
--     model VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     analog_oem VARCHAR(100) NOT NULL,
--     link TEXT,
--     image TEXT,
--     datetime VARCHAR(50)
--     );




