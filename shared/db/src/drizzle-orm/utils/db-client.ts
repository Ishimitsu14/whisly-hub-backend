import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg'

export const getDbClient = async <TSchema extends Record<string, unknown>>(dbUrl: string, schema: TSchema) => {
    const client = new Client({
        connectionString: dbUrl
    })

    await client.connect();

    return drizzle(client, {
        logger: true,
        schema
    })
}