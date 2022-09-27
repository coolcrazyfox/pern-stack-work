CREATE DATABASE razborka;
CREATE TABLE oem(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_number VARCHAR(300) NOT NULL
    );
CREATE TABLE manualtab(
    id SERIAL NOT NULL PRIMARY KEY,
    oem_id BIGINT,
    model  VARCHAR(300),
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(300) NOT NULL,
    analog_oem VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (oem_id) REFERENCES oem(id) ON DELETE CASCADE
    );
CREATE TABLE avitatab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT,
    name_site_id BIGINT,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (manual_id) REFERENCES manualtab(id) UNIQUE(manual_id),
    FOREIGN KEY (name_site_id) REFERENCES namesite(id) ON DELETE CASCADE
    );
CREATE TABLE bampertab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT,
    name_site_id BIGINT,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (manual_id) REFERENCES manualtab(id) UNIQUE(manual_id),
    FOREIGN KEY (name_site_id) REFERENCES namesite(id) ON DELETE CASCADE
    );
CREATE TABLE ebaytab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT,
    name_site_id BIGINT,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (manual_id) REFERENCES manualtab(id) UNIQUE(manual_id),
    FOREIGN KEY (name_site_id) REFERENCES namesite(id) ON DELETE CASCADE
    );
CREATE TABLE storetab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT,
    name_site_id BIGINT,
    model VARCHAR(50),
    country VARCHAR(50) ,
    device VARCHAR(170) NOT NULL,
    oem VARCHAR(100) NOT NULL,
    count VARCHAR(300),
    price VARCHAR(300),
    link TEXT,
    image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (manual_id) REFERENCES manualtab(id) UNIQUE(manual_id),
    FOREIGN KEY (name_site_id) REFERENCES namesite(id) ON DELETE CASCADE
    );
CREATE TABLE allsitetab(
    id SERIAL NOT NULL PRIMARY KEY,
    manual_id BIGINT,
    bamper_id BIGINT,
    avita_id BIGINT,
    ebay_id BIGINT,
    store_id BIGINT,
    name_site_id BIGINT,
--     model VARCHAR(50),
--     country VARCHAR(50),
--     device VARCHAR(170) NOT NULL,
--     oem VARCHAR(100) NOT NULL,
--     analog_oem VARCHAR(300),
--     count VARCHAR(300),
--     price VARCHAR(300),
--     link TEXT,
--     image TEXT,
    datetime VARCHAR(50),
    FOREIGN KEY (manual_id) REFERENCES manualtab(id) UNIQUE(manual_id),
    FOREIGN KEY (bamper_id) REFERENCES bampertab(id) UNIQUE(bamper_id),
    FOREIGN KEY (avita_id) REFERENCES avitatab(id) UNIQUE(avita_id),
    FOREIGN KEY (ebay_id) REFERENCES ebaytab(id) UNIQUE(ebay_id),
    FOREIGN KEY (store_id) REFERENCES storetab(id) UNIQUE(store_id),
    FOREIGN KEY (name_site_id) REFERENCES namesite(id) ON DELETE CASCADE
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




