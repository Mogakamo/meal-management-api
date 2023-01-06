import { Global, Module } from '@nestjs/common';
import * as Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { AddonCategoriesModel } from '../models/addon-categories.model';
import { MealAddonsModel } from '../models/meal-addons.model';

const models = [AddonCategoriesModel, MealAddonsModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex.default({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
