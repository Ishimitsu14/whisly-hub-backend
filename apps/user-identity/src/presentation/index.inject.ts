import { ModuleMetadata } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserController } from "./user.controller";

export const PRESENTATION_INJECT_CONTROLLERS: ModuleMetadata['controllers'] = [
    AuthController,
    UserController,
]