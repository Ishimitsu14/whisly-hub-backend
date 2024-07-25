import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService, SignInWithGoogleRequestDto } from '../../application';
import { FrontendGatewayConfig } from '@shared/config';
import { UserAccountProviderEnum } from '@generated/grpc/user-identity';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req: { user: SignInWithGoogleRequestDto }, @Res() res: Response) {
    const tokens = await this.authService.signInWithProvider({
      provider: UserAccountProviderEnum.GOOGLE,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
    });

    res.cookie('access_token', tokens.access.token, {
      httpOnly: true,
    });
    res.cookie('refresh_token', tokens.refresh.token, {
      httpOnly: true,
      expires: tokens.refresh.expiresAt,
    });
    res.redirect(FrontendGatewayConfig.auth.redirectUrl);
  }
}
