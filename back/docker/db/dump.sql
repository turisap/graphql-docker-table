CREATE DATABASE graphql_back;

\c graphql_back;

-- add tables

CREATE TABLE IF NOT EXISTS filter_model (
    id SERIAL PRIMARY KEY, 
    title character varying(100) NOT NULL,
    UNIQUE(title)
);

CREATE TABLE IF NOT EXISTS initiator_model (
    id SERIAL PRIMARY KEY, 
    title character varying(20) NOT NULL,
    UNIQUE(title)
);

CREATE TABLE IF NOT EXISTS todo_model (
    todo_id SERIAL PRIMARY KEY,
    title character varying(100) NOT NULL,
    description character varying(500) NOT NULL, 
    filter INT NOT NULL REFERENCES filter_model (id), 
    initiator INT NOT NULL REFERENCES initiator_model (id),
    CONSTRAINT fk_filter
    FOREIGN KEY(filter) 
	REFERENCES filter_model(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_initiator
    FOREIGN KEY(initiator) 
	REFERENCES initiator_model(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


-- create a couple of filters

INSERT INTO filter_model (title) VALUES ('untouched');
INSERT INTO filter_model (title) VALUES ('progress');
INSERT INTO filter_model (title) VALUES ('done');
INSERT INTO filter_model (title) VALUES ('set aside');
INSERT INTO filter_model (title) VALUES ('cancelled');

-- made initiators

INSERT INTO initiator_model (title) VALUES ('turisap');
INSERT INTO initiator_model (title) VALUES ('mom');
INSERT INTO initiator_model (title) VALUES ('dad');
INSERT INTO initiator_model (title) VALUES ('work');

-- make todos

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'my first todo',
    'I found it on the web',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'go to shop',
    'buy some milk',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'ice skating instructor',
    'you need to start play hokkey',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'Dima call',
    'at 12:30 via zoom',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'vocay planning',
    'read about seasons in Sheregesh first',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'hotel booking',
    'book several options on various dates to be safe',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);

INSERT INTO todo_model
(title, description, filter, initiator)
VALUES 
(
    'find flights',
    'well, it can be tough and expensive this year',
    (SELECT id from filter_model offset floor(random() * (select count(*) from filter_model)) limit 1),
    (SELECT id from initiator_model offset floor(random() * (select count(*) from initiator_model)) limit 1)
);





