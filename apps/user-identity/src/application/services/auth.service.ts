import { CommandBus } from '@nestjs/cqrs';
import { SignInWithProviderCommand } from '../CQRS';
import { Injectable } from '@nestjs/common';
import { SignInWithProviderRequest } from '@generated/grpc/user-identity';

@Injectable()
export class AuthService {
  constructor(private commandBus: CommandBus) {}

  async signInWithProvider(payload: SignInWithProviderRequest) {
    return this.commandBus.execute(
      new SignInWithProviderCommand(payload.provider, payload.email, payload.firstName, payload.lastName),
    );
  }
}
