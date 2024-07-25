import { FindUserByIdRequest } from "@generated/grpc/user-identity"
import { Injectable } from "@nestjs/common"
import { CommandBus } from "@nestjs/cqrs"
import { FindUserByIdCommand } from "../CQRS"

@Injectable()
export class UserService {
    constructor(private commandBus: CommandBus) {}

    async findById(payload: FindUserByIdRequest) {
        return this.commandBus.execute(
            new FindUserByIdCommand(payload.id)
        )
    }
}