import { ModuleMetadata } from "@nestjs/common";
import { DATABASE_INJECT_PROVIDERS } from "./database";

export const INFRA_INJECT_PROVIDERS: ModuleMetadata['providers'] = [
    ...DATABASE_INJECT_PROVIDERS
]