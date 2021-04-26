DROP TABLE "todo-list";

CREATE TABLE "todo-list" (
    "id" serial PRIMARY KEY,
    "task" varchar(75) NOT NULL,
    "done" BOOLEAN DEFAULT FALSE
);


-- Populate DB
INSERT INTO "todo-list"("task", "done") VALUES('take out the trash', 'FALSE') RETURNING "id", "task", "artist", "done";

SELECT * FROM "todo-list";