import express from 'express';
import user from '../controllers/user/index';
import todo from '../controllers/todo/index';
const router = express.Router();

router.get('/users', user.findAllUsers);
router.get('/user', user.findById);
router.post('/user', user.create);
router.put('/user', user.updateById);
router.delete('/user', user.deleteUser);

router.get('/');

router.get('/', todo.findAllTodos);
router.get('/todo', todo.findById);
router.post('/todo', todo.create);
router.put('/todo', todo.updateById);
router.delete('/todo', todo.deleteTodo);

export default router;
