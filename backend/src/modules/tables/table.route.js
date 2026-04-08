import { Router } from 'express';
import { listTables } from './table.controller.js';

const router = Router();

router.get('/', listTables);

export default router;
