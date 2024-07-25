import { ModuleMetadata } from "@nestjs/common";
import { UserResolver } from "./resolvers";
import { AuthController } from "./controllers";

export const PRESENTATION_INJECT_RESOLVERS: ModuleMetadata['providers'] = [
    UserResolver,
]

export const PRESENTATION_INJECT_CONTROLLERS: ModuleMetadata['controllers'] = [
    AuthController,
]