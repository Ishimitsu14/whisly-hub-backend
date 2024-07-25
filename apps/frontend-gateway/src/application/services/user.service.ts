import { FindUserByIdRequest, UserServiceClientImpl } from '@generated/grpc/user-identity';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserIdentityConfig } from '@shared/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private grpcUserService: UserServiceClientImpl;

  constructor(@Inject(UserIdentityConfig.grpc.package) private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcUserService = this.client.getService<UserServiceClientImpl>('UserService');
  }

  async findById(payload: FindUserByIdRequest) {
    return firstValueFrom(this.grpcUserService.FindUserById({ id: payload.id }));
  }
}
