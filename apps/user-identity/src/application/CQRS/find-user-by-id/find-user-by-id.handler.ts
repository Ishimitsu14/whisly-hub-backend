import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FindUserByIdCommand } from "./find-user-by-id.command";
import { UserRepository } from "../../../infra/database";
import { IUser } from "../../../domain";
import { GrpcNotFoundException } from "nestjs-grpc-exceptions";

@CommandHandler(FindUserByIdCommand)
export class FindUserByIdHandler implements ICommandHandler<FindUserByIdCommand> {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async execute(command: FindUserByIdCommand): Promise<IUser> {
        const user = await this.userRepository.findById(command.id)

        if (!user) {
            throw new GrpcNotFoundException("User Not Found.");
        }

        return user;
    }

}