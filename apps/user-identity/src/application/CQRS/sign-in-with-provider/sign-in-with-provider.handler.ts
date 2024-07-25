import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignInWithProviderCommand } from './sign-in-with-provider.command';
import { UserRepository } from '../../../infra';
import { GrpcInternalException } from 'nestjs-grpc-exceptions';
import { IUser } from '../../../domain';

@CommandHandler(SignInWithProviderCommand)
export class SignInWithProviderHandler implements ICommandHandler<SignInWithProviderCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: SignInWithProviderCommand): Promise<IUser> {
    const user = await this.userRepository.createUser(
      command.email,
      command.provider,
      command.firstName,
      command.lastName,
    );

    if (!user) {
      throw new GrpcInternalException("Can't create user");
    }

    return user;
  }
}
