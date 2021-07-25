import express, { Router } from 'express';
import fs from 'fs';

const logsRouter: Router = express.Router();

logsRouter.post('/', (req: express.Request, res: express.Response) => {
  res.status(204).send();
  const directory: string = `${__dirname}/../../../../parsed/`;
  const filename: string = req.body.log[0].split('=')[1];
  fs.writeFileSync(`${directory}${filename}`, JSON.stringify(req.body.log, null, 2), { encoding: 'utf-8' });
});

export default logsRouter;
