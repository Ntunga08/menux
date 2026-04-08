import { Router } from 'express';
import { listRequests } from './requests.controller.js';

const router = Router();

router.get('/', listRequests);

export default router;
