import { 
  getTasks, 
  createTask,
  getTasksById,
  deleteTask,
  updateTask
} from '../controllers/TaskController.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(getTasks);
router.route('/').post(createTask);
router.route('/:id').get(getTasksById);
router.route('/:id').delete(deleteTask);
router.route('/:id').put(updateTask);

export default router;