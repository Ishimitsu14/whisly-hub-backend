import { numberParser } from '@packages/berish-configurator-core';
import { configurator } from '../configurator';

export interface FrontendGatewayConfig {
  namepsace: string;
  port: number;

  auth: {
    jwtSecret: string;
    redirectUrl: string;
    tokens: {
      accessLifetime: number;
      refreshLifetime: number;
    };

    google: {
      id: string;
      secret: string;
      callbackUrl: string;
    };
  };
}

export const FrontendGatewayConfig: FrontendGatewayConfig = {
  namepsace: configurator.get('APP_FRONTEND_GATEWAY_NAMESPACE'),
  port: configurator.get('APP_FRONTEND_GATEWAY_PORT', numberParser),
  auth: {
    jwtSecret: configurator.get('APP_FRONTEND_GATEWAY_AUTH_JWT_SECRET'),
    redirectUrl: configurator.get('APP_FRONTEND_GATEWAY_AUTH_REDIRECT_URL'),
    tokens: {
      accessLifetime: configurator.get(
        'APP_FRONTEND_GATEWAY_AUTH_ACCESS_TOKEN_LIFETIME',
        numberParser,
      ),
      refreshLifetime: configurator.get(
        'APP_FRONTEND_GATEWAY_AUTH_REFRESH_TOKEN_LIFETIME',
        numberParser,
      ),
    },

    google: {
      id: configurator.get('APP_FRONTEND_GATEWAY_AUTH_GOOGLE_ID'),
      secret: configurator.get('APP_FRONTEND_GATEWAY_AUTH_GOOGLE_SECRET'),
      callbackUrl: configurator.get(
        'APP_FRONTEND_GATEWAY_AUTH_GOOGLE_CALLBACK_URL',
      ),
    },
  },
};
