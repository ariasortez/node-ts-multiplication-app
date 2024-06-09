import { yarg } from './config/plugins/yargs.plugins';
import { ServerApp } from './presentation/server-app';

(async () => {
  console.log('Fin');
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: fileDestination,
    n: fileName,
  } = yarg;
  ServerApp.run({ base, limit, showTable, fileDestination, fileName });
}