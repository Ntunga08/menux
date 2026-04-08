import { Router } from 'express';
import { listMenu } from './menu.controller.js';

const router = Router();

router.get('/', listMenu);

export default router;
