import { Router } from 'express';
import * as userController from '../controllers/users.js';
import upload from '../services/Upload.js';

const usersRouter = Router();

usersRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(upload.single('image'), userController.addNewUser);

usersRouter
  .route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default usersRouter;
