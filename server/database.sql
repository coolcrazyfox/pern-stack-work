CREATE DATABASE razborka;
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL
    );
CREATE TABLE manualtab(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_id BIGINT REFERENCES oem(id) ON DELETE CASCADE,
    model  VARCHAR(300),
    device VARCHAR(170) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50)

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

-- CREATE TABLE analogtab(
--     id SERIAL NOT NULL PRIMARY KEY,
--     model VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     analog_oem VARCHAR(100) NOT NULL,
--     link TEXT,
--     image TEXT,
--     datetime VARCHAR(50)
--     );




