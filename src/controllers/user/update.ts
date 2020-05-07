import Boom from '@hapi/boom';
import User from '../../models/user';
import errorReponse from '../../utils/error-response';

const updateById = async (req: any, res: any) => {
	try {
		const result = await User.upsert(req.body);
		console.log(result);
		res.status(204).send(result);
	} catch (err) {
		const { output } = Boom.badImplementation('user not created');
		return errorReponse(res, output);
	}
};

export default updateById;
