import launchServer from './server';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

function start() {
  if (cluster.isMaster) {
    console.info(`Master is running with pid ${process.pid}`);
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker: any) => {
      console.info(`worker ${worker.process.pid} died`);
    });
  } else {
    launchServer();
  }
}

start();
