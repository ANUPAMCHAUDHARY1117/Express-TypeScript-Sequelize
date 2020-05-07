import Boom from '@hapi/boom';
import Todo from '../../models/todo';
import errorReponse from '../../utils/error-response';

const deleteUser = async (req: any, res: any) => {
	try {
		const result = await Todo.destroy({ where: { id: req.body.id } });
		console.log(result);
		res.status(204).send('Todo has been deleted');
	} catch (err) {
		const { output } = Boom.badImplementation('Todo not created');
		return errorReponse(res, output);
	}
};

export default deleteUser;
