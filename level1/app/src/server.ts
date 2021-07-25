/* eslint-disable import/no-mutable-exports */
import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import logsRouter from './routers/logs';

const http = require('http');
const https = require('https');
const queue = require('express-queue');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

export const app = express();
const serverPort = process.env.SERVER_PORT || 3000;

export let server: Server = new Server();

const launchServer = () => {
  app.use(queue({ activeLimit: 2000, queuedLimit: -1 }));
  app.use(express.json());
  app.use(compression());
  app.use('/', logsRouter);

  server = app.listen(serverPort, () => {
    console.info(`Server started on port ${serverPort} with pid worker ${process.pid}`);
  });
};

export default launchServer;
