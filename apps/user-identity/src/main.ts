import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UserIdentityGRPCConnector } from '@shared/grpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(UserIdentityGRPCConnector)
  
  app.useGlobalPipes(new ValidationPipe());

  await app.init();
  await app.startAllMicroservices();
}
bootstrap();
