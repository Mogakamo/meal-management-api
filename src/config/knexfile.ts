module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/my_database',
      migrations: {
        directory: __dirname + '/src/migrations',
      },
      seeds: {
        directory: __dirname + '/src/seeds',
      },
    },
  };
  