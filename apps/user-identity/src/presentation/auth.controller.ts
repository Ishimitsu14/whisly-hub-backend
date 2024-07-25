import { Controller } from "@nestjs/common";
import { AuthService } from "../application/services";
import { GrpcMethod } from "@nestjs/microservices";
import { SignInWithProviderRequest } from "@generated/grpc/user-identity";

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @GrpcMethod('AuthService', 'SignInWithProvider')
    async signInWithProvider(payload: SignInWithProviderRequest) {
        return this.authService.signInWithProvider(payload)
    }
}