import path from 'path';
import { ModuleMetadata } from '@nestjs/common';
import { injectJwtModule, injectGraphqlModule, injectClientGrpcModule } from '@shared/modules';
import { FrontendGatewayConfig } from '@shared/config';
import { UserIdentityGRPCConnector } from '@shared/grpc';

export const INFRA_INJECT_MODULES: ModuleMetadata['imports'] = [
  injectClientGrpcModule([UserIdentityGRPCConnector]),
  injectGraphqlModule(path.join('.', 'graphql', 'schema.gql')),
  injectJwtModule(FrontendGatewayConfig.auth.jwtSecret, FrontendGatewayConfig.auth.tokens.accessLifetime),
];
