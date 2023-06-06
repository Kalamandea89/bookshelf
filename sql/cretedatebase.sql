create table b_users
(
	id bigint
		constraint b_users_pk
			primary key,
	name varchar(250),
	age smallint,
	email varchar(250),
	pass varchar(250)
);

create table b_books
(
	id bigint not null
		constraint b_books_pk
			primary key,
	title varchar(500),
	author bigint,
	genre smallint,
	published_date timestamp,
	description varchar(1000)
);

create table b_genre
(
	id smallint not null
		constraint b_genre_pk
			primary key,
	name varchar(255),
	description varchar(1000)
);

create table b_authors
(
	id bigint not null
		constraint b_authors_pk
			primary key,
	name varchar(255),
	website varchar(255)
);

