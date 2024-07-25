import { Module } from '@nestjs/common';
import { INFRA_INJECT_MODULES } from './infra';
import { PRESENTATION_INJECT_CONTROLLERS, PRESENTATION_INJECT_RESOLVERS } from './presentation';
import { APPLICATION_INJECT_PROVIDERS } from './application';

@Module({
  imports: [...INFRA_INJECT_MODULES],
  controllers: [...PRESENTATION_INJECT_CONTROLLERS],
  providers: [...APPLICATION_INJECT_PROVIDERS, ...PRESENTATION_INJECT_RESOLVERS],
})
export class AppModule {}
