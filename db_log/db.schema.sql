BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "clients" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nom"	TEXT,
	"prenom"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "operations" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nature"	TEXT,
	"annee"	INTEGER,
	"trimestre"	INTEGER,
	"reference"	TEXT,
	"montant"	REAL,
	"client"	INTEGER,
	"updated_at"	TEXT,
	"created_at"	TEXT,
	FOREIGN KEY("client") REFERENCES "clients",
	PRIMARY KEY("id" AUTOINCREMENT)
);
COMMIT;
