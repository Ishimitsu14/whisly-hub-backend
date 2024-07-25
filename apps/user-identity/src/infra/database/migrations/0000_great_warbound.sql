CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"first_name" varchar,
	"last_name" varchar,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"provider" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
