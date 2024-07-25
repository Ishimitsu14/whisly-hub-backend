import { relations } from "drizzle-orm";
import { integer, serial, } from "drizzle-orm/pg-core";
import { IUserAccount } from "../../../domain";
import { createPgTable } from "../utils/create-pg-table";
import { users } from "./users";

export const usersAccounts = createPgTable<IUserAccount>('users_accounts', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    provider: integer('provider').notNull(),
})

export const usersAccountsRelations = relations(usersAccounts, ({ one }) => ({
    user: one(users, {
        fields: [usersAccounts.userId],
        references: [users.id]
    })
}))