import { ModuleMetadata } from "@nestjs/common";
import { CQRS_INJECT_PROVIDERS } from "./CQRS";
import { AuthService, UserService } from "./services";

export const APPLICATION_INJECT_PROVIDERS: ModuleMetadata['providers'] = [
    ...CQRS_INJECT_PROVIDERS,
    AuthService,
    UserService
]