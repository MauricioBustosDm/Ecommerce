import { Router } from 'express';

import {
  homeController,
  aboutController,
} from '../controllers/common.controller.js';

export const commonRoutes = Router();

commonRoutes.get('/', homeController);
commonRoutes.get('/about', aboutController);
