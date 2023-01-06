import 'dotenv/config';
import type { Knex } from 'knex';

// Update with your config settings.
import { knexSnakeCaseMappers } from 'objection';

const configuration: { [key: string]: Knex.Config } = {
  dev: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/app/infrastructure/database/migrations',
      stub: './src/app/infrastructure/database/migrations/migration.stub',
    },
    seeds: {
      directory: './src/app/infrastructure/database/seeds',
      stub: './src/app/infrastructure/database/seeds/seed.stub',
    },
    ...knexSnakeCaseMappers,
  },
};
export default configuration;

// import 'dotenv/config';
// import * as Knex from 'knex';
// import { knexSnakeCaseMappers } from 'objection';

// module.exports = {
//   client: 'pg',
//   connection: process.env.DATABASE_URL,
//   migrations: {
//     directory: './src/app/infrastructure/database/migrations',
//     stub: './src/app/infrastructure/database/migrations/migration.stub',
//   },
//   seeds: {
//     directory: './src/app/infrastructure/database/seeds',
//     stub: './src/app/infrastructure/database/seeds/seed.stub',
//   },
//   ...knexSnakeCaseMappers(),
// } as Knex.Config;
