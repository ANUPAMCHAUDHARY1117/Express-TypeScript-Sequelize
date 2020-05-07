import Boom from '@hapi/boom';
import User from '../../models/user';
import errorReponse from '../../utils/error-response';

const deleteUser = async (req: any, res: any) => {
	try {
		const result = await User.destroy({ where: { id: req.body.id } });
		console.log(result);
		res.status(204).send('User has been deleted');
	} catch (err) {
		const { output } = Boom.badImplementation('user not created');
		return errorReponse(res, output);
	}
};

export default deleteUser;
