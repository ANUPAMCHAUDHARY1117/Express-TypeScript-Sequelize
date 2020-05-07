import createUserData from './user';
import createTodoData from './todo';

const seeding = () => {
	createUserData();
	createTodoData();
};

seeding();
