import Boom from '@hapi/boom';
import Todo from '../../models/todo';
import errorReponse from '../../utils/error-response';

const updateById = async (req: any, res: any) => {
	try {
		const result = await Todo.upsert(req.body);
		console.log(result);
		res.status(204).send(result);
	} catch (err) {
		const { output } = Boom.badImplementation('Todo not created');
		return errorReponse(res, output);
	}
};

export default updateById;
