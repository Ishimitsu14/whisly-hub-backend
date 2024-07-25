import { Module } from '@nestjs/common';
import { INFRA_INJECT_PROVIDERS } from './infra';
import { CqrsModule } from '@nestjs/cqrs';
import { APPLICATION_INJECT_PROVIDERS } from './application';
import { PRESENTATION_INJECT_CONTROLLERS } from './presentation';

@Module({
  imports: [
    CqrsModule
  ],
  controllers: [
    ...PRESENTATION_INJECT_CONTROLLERS,
  ],
  providers: [
    ...INFRA_INJECT_PROVIDERS,
    ...APPLICATION_INJECT_PROVIDERS,
  ],
})
export class AppModule {}
