import express, { Router } from 'express';
import imageRoute from './API/imgRoute';

const routes = express.Router();

routes.use('/imageResize', imageRoute);

routes.get('/', (req: express.Request, res: express.Response) : void => {
  res.send(
    `<h1>Image Resize</h1> \n <h2> Kindly use URL like this format "/api/imageResize?filename=xx&width=xx&height=xx" </h2>`
  );
});

export default routes;
