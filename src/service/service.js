'use strict';

const ConsoleCommandManager = require(`./cli/ConsoleCommandManager`);
const chalk = require(`chalk`);
const {
  server
} = require(`./cli/commands`);

const command = process.argv[2];
const args = process.argv.slice(3);

/* eslint-disable */
const commandManager = new ConsoleCommandManager(
  `server`,
  `Программа запускает http-сервер и формирует файл с данными для API.`
);
/* eslint-enable */

commandManager
  .add(`--server`, `запускает http-server`, server, [`port`])
  .execute(command, args)
  .catch((err) => {
    console.log(chalk.red(`Ошибка`));
    console.log(err.stack);
    console.log(chalk.red(err.message));
    process.exit(1);
  });
