import Boom from '@hapi/boom';
import User from '../../models/user';
import errorReponse from '../../utils/error-response';

const create = async (req: any, res: any) => {
	try {
		console.log(req.body);
		const result = await User.create(req.body);
		console.log(result);
		res.status(201).send(result);
	} catch (err) {
		const { output } = Boom.badImplementation('user not created');
		return errorReponse(res, output);
	}
};

export default create;
