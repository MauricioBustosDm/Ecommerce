import { Router } from 'express';

import {
  homeController,
  aboutController,
} from '../controllers/common.controller.js';

const commonRoutes = Router();

commonRoutes.get('/', homeController);
commonRoutes.get('/about', aboutController);

export default commonRoutes;
