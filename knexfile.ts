import 'dotenv/config';

// Update with your config settings.
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  // },
  migrations: {
    directory: './src/app/infrastructure/database/migrations',
    stub: './src/app/infrastructure/database/migrations/migration.stub',
  },
  seeds: {
    directory: './src/app/infrastructure/database/seeds',
    stub: './src/app/infrastructure/database/seeds/seed.stub',
  },
  ...knexSnakeCaseMappers,
};
// export default configuration;

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
