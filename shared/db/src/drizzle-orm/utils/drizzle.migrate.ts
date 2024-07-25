import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { getDbClient } from "./db-client";

export const drizzleMigrate = (appName: string, url: string, schema: Record<string, unknown>) => async () => {
    const db = await getDbClient(url, schema);

    await migrate(db, { migrationsFolder: `apps/${appName}/src/infra/database/migrations` });
}