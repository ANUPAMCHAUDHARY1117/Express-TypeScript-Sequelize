import Boom from '@hapi/boom';
import User from '../../models/user';
import errorReponse from '../../utils/error-response';

const findAllUsers = async (req: any, res: any) => {
	try {
		const result = await User.findAll({ where: {} });
		if (result.length === 0) {
			const { output } = Boom.notFound('No user found.');
			return errorReponse(res, output);
		}
		res.status(200).send(result);
		console.log(result);
	} catch (err) {
		const { output } = Boom.badImplementation('There was a problem finding the user');
		return errorReponse(res, output);
	}
};

export default findAllUsers;
