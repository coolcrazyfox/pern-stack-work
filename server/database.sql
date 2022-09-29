-- CREATE DATABASE razborka;
-- one-to-one


--     insert into oem(oem_number) values ('5598444445', 3);
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL
    );

-- insert into manual(model, device, oem_id, analog_oem, link, image, datetime) values ('audi', 'navigation GPS', 1, '178', 'link2', 'img2','2022-09-29');

CREATE TABLE manual(
    id SERIAL NOT NULL PRIMARY KEY,
    model  VARCHAR(300),
    device VARCHAR(170) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    oem_id BIGINT,
    FOREIGN KEY (oem_id) REFERENCES oem (id)
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
-- insert into person(name, surname) values ('5', '5453');create TABLE person(
create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);
-- insert into post(title, content, user_id) values ('1', '2',1);
create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
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

    -- many-to-many https://youtu.be/IjLqJKJxNzg
CREATE TABLE inform(
    oemman_id BIGINT REFERENCES oem(id),
    site_id BIGINT REFERENCES sitepost(id),
    CONSTRAINT info_id PRIMARY KEY (oemman_id, site_id)
    );


CREATE TABLE avitatab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT REFERENCES manualtab(id) UNIQUE(manual_id),
    name_site_id BIGINT REFERENCES namesite(id) ON DELETE CASCADE,
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
    manual_id BIGINT REFERENCES manualtab(id) UNIQUE(manual_id),
    name_site_id BIGINT REFERENCES namesite(id) ON DELETE CASCADE,
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
CREATE TABLE ebaytab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT REFERENCES manualtab(id) UNIQUE(manual_id),
    name_site_id BIGINT REFERENCES namesite(id) ON DELETE CASCADE,
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
    manual_id BIGINT REFERENCES manualtab(id) UNIQUE(manual_id),
    name_site_id BIGINT REFERENCES namesite(id) ON DELETE CASCADE,
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
    manual_id BIGINT REFERENCES manualtab(id) UNIQUE(manual_id),
    bamper_id BIGINT REFERENCES bampertab(id) UNIQUE(bamper_id,
    avita_id BIGINT REFERENCES avitatab(id) UNIQUE(avita_id),
    ebay_id BIGINT REFERENCES ebaytab(id) UNIQUE(ebay_id),
    store_id BIGINT REFERENCES storetab(id) UNIQUE(store_id),
    name_site_id BIGINT REFERENCES namesite(id) ON DELETE CASCADE,
--     model VARCHAR(50),
--     country VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     oem VARCHAR(100) NOT NULL,
--     analog_oem VARCHAR(300),
--     count VARCHAR(300),
--     price VARCHAR(300),
--     link TEXT,
--     image TEXT,
    datetime VARCHAR(50)
    );
CREATE TABLE namesite(
    id SERIAL NOT NULL PRIMARY KEY,
    name_site VARCHAR(50)
    );
