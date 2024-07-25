import { ModuleMetadata } from "@nestjs/common";
import { SignInWithProviderCommand, SignInWithProviderHandler } from "./sign-in-with-provider";
import { FindUserByIdCommand, FindUserByIdHandler } from "./find-user-by-id";

export const CQRS_INJECT_PROVIDERS: ModuleMetadata['providers'] = [
    SignInWithProviderCommand,
    SignInWithProviderHandler,
    FindUserByIdCommand,
    FindUserByIdHandler
]