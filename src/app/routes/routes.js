import { Router } from 'express';
import helloController from './hello/hello.crontroller.js';
import imageController from './images/image.crontroller.js';


const api = Router()
  .use(imageController)


export default Router().use('/api', api);