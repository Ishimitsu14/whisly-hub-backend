import { JwtModule } from '@nestjs/jwt';

export const injectJwtModule = (secret: string, expiresIn: number) => {
    return JwtModule.register({
        secret,
        signOptions: {
          expiresIn,
        },
      })

}