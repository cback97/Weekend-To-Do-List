DROP TABLE "todo-list";

CREATE TABLE "todo-list" (
    "id" serial PRIMARY KEY,
    "username" varchar(75) NOT NULL,
);