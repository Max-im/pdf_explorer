DO $$ DECLARE r record;
BEGIN
    FOR r IN
    (SELECT tablename
    FROM pg_tables
    WHERE schemaname = current_schema())
    LOOP
    EXECUTE 'DROP TABLE IF EXISTS '
    || quote_ident
    (r.tablename) || ' CASCADE';
END LOOP;
END $$;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    gid CHARACTER varying(128),
    name CHARACTER varying(128),
    email CHARACTER varying(128),
    avatar CHARACTER varying(256),
    isadmin BOOLEAN DEFAULT false,
    isactive BOOLEAN DEFAULT true
);

INSERT INTO users(id, gid, name, email, avatar, isadmin)
VALUES
    ( 1, '104819189707149372033', 'Maksim Pozhydaiev', 'pogidaevmo@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GhqQRRNIk2JNmYJIhLYmSNnijzAsTaEBWvfATBv8Q=s96-c', true);


CREATE TABLE languages
(
    id SERIAL PRIMARY KEY,
    fullName CHARACTER varying(64),
    shortName CHARACTER varying(64),
    init BOOLEAN DEFAULT false,
    flag CHARACTER varying(128)
);

INSERT 
    INTO languages(fullName, shortName, init) 
    VALUES 
        ('english', 'en', true),
        ('russian', 'ru', false),
        ('ukrainian', 'ua', false),
        ('espanyol', 'es', false),
        ('italian', 'it', false),
        ('france', 'fr', false),
        ('hungry', 'hg', false),
        ('germany', 'de', false),
        ('turkey', 'tr', false),
        ('united kindom', 'uk', false);



CREATE TABLE slides
(
    id SERIAL PRIMARY KEY,
    lang INTEGER REFERENCES languages(id),
    data CHARACTER varying(64)
);


INSERT 
    INTO slides(lang, data) 
    VALUES 
        (1, 'en data'),
        (2, 'ru data'),
        (3, 'ua data'),
        (4, 'es data'),
        (5, 'it data'),
        (6, 'fr data'),
        (7, 'hg data'),
        (8, 'de data'),
        (9, 'tr data'),
        (10, 'uk data');