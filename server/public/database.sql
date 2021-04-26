DROP TABLE "todo-list";

CREATE TABLE "todo-list" (
    "id" serial PRIMARY KEY,
    "task" varchar(75) NOT NULL,
);
