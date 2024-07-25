import { ModuleMetadata } from "@nestjs/common";
import { UserIdentityConfig } from "@shared/config";
import { drizzleOrmInject } from "@shared/db";
import { UserRepository } from "./repositories";
import { UserIdentityDrizzleSchema } from "./schema";

export const DATABASE_INJECT_PROVIDERS: ModuleMetadata['providers'] = [
    drizzleOrmInject<typeof UserIdentityDrizzleSchema>(UserIdentityConfig.database.url, UserIdentityDrizzleSchema),
    UserRepository,
]