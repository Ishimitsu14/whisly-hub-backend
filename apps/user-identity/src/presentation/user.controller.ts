import { Controller } from "@nestjs/common";
import { UserService } from "../application/services";
import { GrpcMethod } from "@nestjs/microservices";
import { FindUserByIdRequest, SignInWithProviderRequest } from "@generated/grpc/user-identity";

@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @GrpcMethod('UserService', 'FindUserById')
    async signInWithProvider(payload: FindUserByIdRequest) {
        return this.userService.findById(payload)
    }
}