const knex = require('knex');
const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'postgres://nampv:sfbgVF5ytpa4cE3boPi2SUtxyQ21JUYa@dpg-cnes0cvsc6pc73cp8kq0-a.singapore-postgres.render.com/lotus_syndication',
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;