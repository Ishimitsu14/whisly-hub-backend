import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

export const injectGraphqlModule = (path: string) => {
  return GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    installSubscriptionHandlers: true,
    autoSchemaFile: path,
    playground: {
      settings: {
        'request.credentials': 'same-origin',
      },
    },
  });
};
