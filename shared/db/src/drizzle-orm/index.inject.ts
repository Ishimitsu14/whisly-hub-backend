import { DatabaseService } from "./database.service"

export const DRIZZLE_ORM_TOKEN = Symbol('drizzle-orm')

export const drizzleOrmInject = <TSchema extends Record<string, unknown>>(dbUrl: string, schema: TSchema) => {
    return {
        provide: DRIZZLE_ORM_TOKEN,
        useFactory: () => {
            return new DatabaseService<TSchema>(dbUrl, schema)
        }
    } 
}