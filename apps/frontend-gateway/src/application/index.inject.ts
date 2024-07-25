import { ModuleMetadata } from "@nestjs/common";
import { UserService, AuthService } from "./services";
import { GoogleStrategy, JwtStrategy } from "./strategies";

export const APPLICATION_INJECT_PROVIDERS: ModuleMetadata['providers'] = [
    AuthService,
    UserService,
    GoogleStrategy,
    JwtStrategy
]