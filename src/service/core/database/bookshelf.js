'use strict';

const initKnex = require(`./knex`);

module.exports = (app) => {

  const initialize = async () => {
    await initKnex(app);
  };

  const close = async () => {
    await app.connection.close();
  }

  return {
    initialize,
    close
  }
}