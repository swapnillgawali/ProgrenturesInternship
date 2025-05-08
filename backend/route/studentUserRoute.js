import express from 'express';
import { registerStudentUser } from '../controller/studentUserController.js';
import { loginStudentUser } from '../controller/studentUserController.js';
const router = express.Router();

router.post('/register', registerStudentUser);
router.post('/login', loginStudentUser);
export default router;
