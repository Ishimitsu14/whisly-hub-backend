import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { FrontendGatewayConfig } from '@shared/config';
import { Request } from 'express';
import { UserService } from '../services';
import cookie from 'cookie';
import { User } from '@generated/grpc/user-identity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: (req: Request) => {
        let token = null;
        const cookies = cookie.parse(req?.headers?.cookie);

        if (cookies && cookies['access_token']) {
          token = cookies['access_token'];
        }

        return token;
      },
      ignoreExpiration: false,
      secretOrKey: FrontendGatewayConfig.auth.jwtSecret,
    });
  }

  async validate(payload: User) {
    const user = await this.userService.findById({
      id: payload.id,
    });

    if (!user || !payload) {
      throw new GraphQLError('Unauthorized');
    }

    return user;
  }
}
