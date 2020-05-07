import Todo from '../models/todo';
const todoData = [
	{
		id: 1,
		name: 'Todo1',
		userId: 1,
	},
	{
		id: 2,
		name: 'Todo2',
		userId: 2,
	},
];
const bulkCreateTodoData = () => {
	Todo.bulkCreate(todoData);
};
export default bulkCreateTodoData;
