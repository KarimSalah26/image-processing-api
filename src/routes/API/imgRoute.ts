import express from 'express';
import path from 'path'; // Import the path module
import dirsAndFiles from '../../fileWork';
import imgResize from '../../imgResizing';

const imageRoute = express.Router();

imageRoute.get('/', async (req: express.Request, res: express.Response): Promise<void | any> => {
  const paraQuery = req.query;
  const width = Number(paraQuery.width);
  const height = Number(paraQuery.height);
  const inputFile = `img/${paraQuery.filename}.jpg`;
  const outputFile = `thump/${paraQuery.filename}_${width}_${height}.jpg`;

  const valid = dirsAndFiles.validateParams(req.query);
  // console.log('1)'+ valid)
  if (!valid) {
    return res.send(`Invalid parameters`);
  }

  const inputExists = dirsAndFiles.imgExists(req.query);
  //console.log('2)'+inputExists)
  if (!inputExists) {
    return res.send(`Image not available`);
  }

  const outputExists = dirsAndFiles.thumpExists(req.query);
  if (!outputExists) {
    // console.log( `Thumpnail not available`)
    await imgResize(inputFile, outputFile, width, height);
  }
  res.sendFile(path.resolve(outputFile));
});

export default imageRoute;
