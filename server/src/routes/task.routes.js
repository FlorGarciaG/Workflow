import { getTasks, createTask } from '../controllers/TaskController.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(getTasks);
router.route('/').post(createTask);

export default router;