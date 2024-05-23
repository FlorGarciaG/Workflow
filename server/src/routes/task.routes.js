import { getTasks, postTask } from '../controllers/TaskController.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(getTasks);
router.route('/').post(postTask);

export default router;