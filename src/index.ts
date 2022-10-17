import express from 'express'; //Import express
import routes from './routes/index'; //Import the main route

//Start up the app server
const app = express();
//Setting the port
const port = 4200;

//GET Route
app.use('/api', routes);

//Listening to the server
module.exports = app.listen(port, () => {
  console.log(`Server starts at port ${port}`);
});
export default app;
