import { numberParser } from '@packages/berish-configurator-core';
import { configurator } from '../configurator';

export interface UserIdentityConfig {
  namepsace: string;

  grpc: {
    port: number;
    package: string;
  };

  database: {
    url: string;
  };
}

export const UserIdentityConfig: UserIdentityConfig = {
  namepsace: configurator.get('APP_USER_IDENTITY_NAMESPACE'),

  grpc: {
    port: configurator.get('APP_USER_IDENTITY_GRPC_PORT', numberParser),
    package: configurator.get('APP_USER_IDENTITY_GRPC_PACKAGE'),
  },

  database: {
    url: configurator.get('APP_USER_IDENTITY_DB_URL'),
  },
};
