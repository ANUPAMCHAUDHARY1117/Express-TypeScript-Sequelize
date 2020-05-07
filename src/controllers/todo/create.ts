import Boom from '@hapi/boom';
import Todo from '../../models/todo';
import errorReponse from '../../utils/error-response';

const create = async (req: any, res: any) => {
	try {
		console.log(req.body);
		const result = await Todo.create(req.body);
		console.log(result);
		res.status(201).send(result);
	} catch (err) {
		const { output } = Boom.badImplementation('Todo not created');
		return errorReponse(res, output);
	}
};

export default create;
