import { NestFactory } from '@nestjs/core';
import { Model } from 'objection';
import { AppModule } from './app/infrastructure/http/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Initialize knex
  // const knex = require('knex')(knexConfig.development);
  // Model.knex(knex);

  await app.listen(3000);
}
bootstrap();
