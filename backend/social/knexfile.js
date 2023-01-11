// Update with your config settings.

module.exports = {


  development: {
    client: 'pg',
    connection: 
                'postgres://'+ 
                process.env.POSTGRES_USERNAME+ 
                ':'+ 
                process.env.POSTGRES_PASSWORD+ 
                '@'+ 
                process.env.POSTGRES_HOST+ 
                '/'+ 
                process.env.POSTGRES_DATABASE,
    // connection: {
    //   database: process.env.SOCIAL_DB,
    //   user:     process.env.POSTGRES_USERNAME,
    //   password: process.env.POSTGRES_PASSWORD,
    //   host : process.env.POSTGRES_HOST,
    // },
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
    connection: 
                'postgres://'+ 
                process.env.POSTGRES_USERNAME+ 
                ':'+ 
                process.env.POSTGRES_PASSWORD+ 
                '@'+ 
                process.env.POSTGRES_HOST+ 
                '/'+ 
                process.env.POSTGRES_DATABASE,
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
