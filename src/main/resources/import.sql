INSERT INTO users (id, email, name, password, roles, username) VALUES (1, 'user@email.com', 'full name', 'cBrlgyL2GI2GINuLUUwgojITuIufFycpLG4490dhGtY=', 1, 'user');
INSERT INTO users (id, email, name, password, roles, username) VALUES (2, 'admin@email.com', 'full name', 'dQNjUIMorJb8Ubj2+wVGYp6eAeYkdekqAcnYp+aRq5w=', 2, 'admin');



-- we don't know how to generate root <with-no-name> (class Root) :(

comment on database postgres is 'default administrative connection database';

create sequence public.user_id_seq;

alter sequence public.user_id_seq owner to postgres;

create sequence public.hibernate_sequence;

alter sequence public.hibernate_sequence owner to postgres;

create table public.contents
(
    id          bigint not null
        primary key,
    category    integer,
    code        varchar(255),
    description varchar(255),
    name        varchar(255),
    status      boolean
);

alter table public.contents
    owner to postgres;

create table public.users
(
    id       bigint not null
        primary key,
    email    varchar(255),
    name     varchar(255),
    password varchar(255),
    roles    integer,
    username varchar(255)
);

alter table public.users
    owner to postgres;

