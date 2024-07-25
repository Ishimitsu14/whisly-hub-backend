import { AuthServiceClientImpl, SignInWithProviderRequest, User } from '@generated/grpc/user-identity';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientGrpc } from '@nestjs/microservices';
import { FrontendGatewayConfig, UserIdentityConfig } from '@shared/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService implements OnModuleInit {
  private grpcAuthService: AuthServiceClientImpl;

  constructor(
    @Inject(UserIdentityConfig.grpc.package) private client: ClientGrpc,
    private readonly jwtService: JwtService,
  ) {}

  onModuleInit() {
    this.grpcAuthService = this.client.getService<AuthServiceClientImpl>('AuthService');
  }

  async signInWithProvider(payload: SignInWithProviderRequest) {
    const user = await firstValueFrom(
      this.grpcAuthService.SignInWithProvider({
        email: payload.email,
        provider: payload.provider,
        firstName: payload.firstName,
        lastName: payload.lastName,
      }),
    );

    return this.createTokens(user);
  }

  private async createTokens(user: User) {
    const accessToken = this.jwtService.sign(user, {
      expiresIn: FrontendGatewayConfig.auth.tokens.accessLifetime,
    });
    const refreshToken = this.jwtService.sign(user, {
      expiresIn: FrontendGatewayConfig.auth.tokens.refreshLifetime,
    });

    return {
      access: {
        token: accessToken,
        expiresAt: new Date(Date.now() + FrontendGatewayConfig.auth.tokens.accessLifetime),
      },
      refresh: {
        token: refreshToken,
        expiresAt: new Date(Date.now() + FrontendGatewayConfig.auth.tokens.refreshLifetime),
      },
    };
  }
}
