// Update with your config settings.

module.exports = {


  development: {
    client: 'postgres',
    connection: {
      database: 'venturenoxbackend',
      user:     'postgres',
      password: '123',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/Migrations'
    },
    seeds: {
      directory: __dirname + '/db/Seeds'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      database: 'venturenoxbackend',
      user:     'postgres',
      password: '123',
    },
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: __dirname + '/db/Migrations'
    },
    seeds: {
      directory: __dirname + '/db/Seeds'
    },
  }

};
