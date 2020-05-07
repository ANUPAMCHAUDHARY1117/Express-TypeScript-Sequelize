import Boom from '@hapi/boom';
import Todo from '../../models/todo';
import User from '../../models/user';
import errorReponse from '../../utils/error-response';

interface UserInterface {
	[key: string]: any;
}

const findAllTodos = async (req: any, res: any) => {
	try {
		const todos = await Todo.findAll({ where: {}, raw: true });
		const users = await User.findAll({ where: {}, raw: true });
		const userHash: UserInterface = {};
		users.map((user) => {
			userHash[user.id] = user.name;
		});
		console.log(userHash);
		const todosArray = todos.map((todo) => {
			const userName = userHash[todo.userId];
			return { name: todo.name, todoId: todo.id, user: userName, userId: todo.userId };
		});
		console.log(todosArray);
		res.render('home', { layout: 'home-layout', todos: todosArray });
	} catch (err) {
		const { output } = Boom.badImplementation('There was a problem finding the todo');
		return errorReponse(res, output);
	}
};

export default findAllTodos;
