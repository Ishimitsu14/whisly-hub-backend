import { Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { getDbClient } from './utils/db-client';

@Injectable()
export class DatabaseService<TSchema extends Record<string, unknown>> {
  private _db: NodePgDatabase<TSchema>;

  constructor(dbUrl: string, schema: TSchema) {
    this.createDbClient(dbUrl, schema);
  }

  async createDbClient(dbUrl: string, schema: TSchema) {
    try {
      this._db = await getDbClient(dbUrl, schema);

      console.log('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to the database', error);
      throw error;
    }
  }

  get db() {
    return this._db;
  }
}
