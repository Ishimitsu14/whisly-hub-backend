import { serial, varchar } from "drizzle-orm/pg-core";
import { createPgTable } from "../utils/create-pg-table";
import { IUser } from "apps/user-identity/src/domain/User/IUser";
import { relations } from "drizzle-orm";
import { usersAccounts } from "./users-accounts";

export const users = createPgTable<IUser>('users', {
    id: serial('id').primaryKey(),
    email: varchar('email').unique().notNull(),
    firstName: varchar('first_name'),
    lastName: varchar('last_name'),
})


export const usersRelations = relations(users, ({ many }) => ({
    accounts: many(usersAccounts)
}))