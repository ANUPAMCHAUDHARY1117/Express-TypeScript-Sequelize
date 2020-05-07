import User from '../models/user';
const userData = [
	{
		id: 1,
		name: 'User1',
	},
	{
		id: 2,
		name: 'User2',
	},
];
const bulkInsertUserData = () => {
	User.bulkCreate(userData);
};
export default bulkInsertUserData;
