import { pgTable, PgColumnBuilder } from "drizzle-orm/pg-core";

export function createPgTable<T>(tableName: string, columns: { [K in keyof T]: PgColumnBuilder }) {
    return pgTable(tableName, columns);
}