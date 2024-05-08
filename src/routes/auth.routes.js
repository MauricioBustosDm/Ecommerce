import { Router } from 'express';

import {
  signInController,
  signUpController,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/sign-in', signInController);
authRouter.get('/sign-up', signUpController);

export default authRouter;
