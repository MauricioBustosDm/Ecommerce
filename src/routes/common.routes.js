import { Router } from 'express';

import {
  homeController,
  aboutController,
  shopController,
  contactUsController,
  productDetailsController,
} from '../controllers/common.controller.js';

const commonRoutes = Router();

commonRoutes.get('/', homeController);
commonRoutes.get('/about', aboutController);
commonRoutes.get('/shop', shopController);
commonRoutes.get('/product', productDetailsController);
commonRoutes.get('/contact-us', contactUsController);

export default commonRoutes;
